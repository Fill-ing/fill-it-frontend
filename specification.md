# Funnel 시스템 구현 명세서

## 목표

재사용 가능하고 책임 분리가 잘 된 Funnel 레이아웃과 흐름을 만든다.

**현재 범위:**
- ✅ Funnel 레이아웃 구조
- ✅ 단계 관리 로직
- ✅ 데이터 상태 관리
- ❌ 각 단계별 컴포넌트 구현 (빈 공간으로 남김)
- ❌ Validation 로직
- ❌ 서버 전송 로직

---

## 전체 동작 흐름

```
사용자 입력 → updateData() → funnelData 업데이트
                ↓
          버튼 클릭 → moveToNextStep() → 다음 단계로 이동
                ↓
          단계별 UI 렌더링 (입력값 유지)
                ↓
          최종 단계 → 서버 전송 준비 (추후 구현)
```

**핵심 요구사항:**
1. URL 라우팅 없이 상태 기반으로 단계 전환
2. 단계 이동 시 이전 입력값 유지
3. 재사용 가능한 제네릭 구조

---

## 타입 정의

### 1. 단계(Step) 타입

```tsx
type TechRiderStep =
  | 'teamName'   // 1단계: 팀명 입력
  | 'setList'    // 2단계: 세트리스트 입력
  | 'session'    // 3단계: 세션 악기 구성
  | 'notes'      // 4단계: 특이사항 입력
  | 'review'     // 5단계: 최종 검토
  | 'complete';  // 6단계: 완료
```

### 2. 데이터(Data) 타입

```tsx
// 헬퍼 타입
type SessionInstrument = {
  instrument: string;  // 악기 이름 (예: "기타", "드럼")
  count: number;       // 필요 개수
};

type SessionData = {
  songId: string;                    // 곡 ID
  instruments: SessionInstrument[];  // 해당 곡에 필요한 악기 목록
};

// 전체 Funnel 데이터 구조
type TechRiderDataType = {
  teamName: {
    name: string;
  };

  setList: {
    songs: {
      id: string;
      title: string;
      order: number;  // 곡 순서
    }[];
  };

  session: {
    sessions: SessionData[];
  };

  notes: {
    text: string;
  };

  review: null;    // 검토 단계는 데이터 입력 없음
  complete: null;  // 완료 단계는 데이터 입력 없음
};
```

### 3. 초기 데이터 예시

```tsx
const INITIAL_TECH_RIDER_DATA: TechRiderDataType = {
  teamName: { name: '' },
  setList: { songs: [] },
  session: { sessions: [] },
  notes: { text: '' },
  review: null,
  complete: null,
};
```

---

## 훅(Hooks) 명세

### useFunnelStep<T>

**목적:** 단계 전환 로직 관리

#### 타입 정의

```tsx
interface UseFunnelStepProps<T> {
  steps: T[];  // 순서가 있는 단계 배열
}

interface UseFunnelStepReturn<T> {
  currentStep: T;                    // 현재 단계
  moveToNextStep: () => void;        // 다음 단계로 이동
  moveToPrevStep: () => void;        // 이전 단계로 이동
}

function useFunnelStep<T>(props: UseFunnelStepProps<T>): UseFunnelStepReturn<T>;
```

#### 구현 요구사항

1. **초기값:** 배열의 첫 번째 원소 (`steps[0]`)
2. **상태 관리:** `useState` 사용
3. **경계 조건 처리:**
   - 첫 번째 단계에서 `moveToPrevStep()` 호출 → 아무 동작 없음
   - 마지막 단계에서 `moveToNextStep()` 호출 → 아무 동작 없음

#### 사용 예시

```tsx
const { currentStep, moveToNextStep, moveToPrevStep } = useFunnelStep({
  steps: ['teamName', 'setList', 'session', 'notes', 'review', 'complete']
});

// currentStep: 'teamName' (초기값)
// moveToNextStep() 호출 → currentStep: 'setList'
```

---

### useFunnelData<T>

**목적:** Funnel 입력 데이터 상태 관리

#### 타입 정의

```tsx
interface UseFunnelDataProps<T> {
  initialData: T;  // 초기 데이터
}

interface UseFunnelDataReturn<T> {
  funnelData: T;                         // 현재 Funnel 데이터
  updateData: (data: Partial<T>) => void;  // 데이터 업데이트 함수
}

function useFunnelData<T>(props: UseFunnelDataProps<T>): UseFunnelDataReturn<T>;
```

#### 구현 요구사항

1. **상태 관리:** `useReducer` 사용
2. **Reducer 구조:**

```tsx
type FunnelDataAction<T> = {
  type: 'UPDATE';
  payload: Partial<T>;
};

function funnelDataReducer<T>(state: T, action: FunnelDataAction<T>): T {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
```

3. **updateData 동작:**
   - Partial Update 지원 (전체 데이터가 아닌 일부만 업데이트 가능)
   - 예: `updateData({ teamName: { name: '밴드명' } })`

#### 사용 예시

```tsx
const { funnelData, updateData } = useFunnelData({
  initialData: INITIAL_TECH_RIDER_DATA
});

// 팀명 업데이트
updateData({ teamName: { name: 'The Beatles' } });

// funnelData.teamName.name → 'The Beatles'
// 나머지 필드는 초기값 유지
```

---

## 컴포넌트 명세

### FunnelLayout

**목적:** 모든 Funnel 단계의 공통 UI 레이아웃 (Presentational Component)

#### Props 인터페이스

```tsx
interface FunnelLayoutProps {
  totalStep: number;               // 전체 단계 수
  currentStep: number;             // 현재 단계 (1-based index)
  text: string;                    // 단계 제목
  children: React.ReactNode;       // 단계별 컨텐츠
  moveToNextStep: () => void;      // 다음 버튼 클릭 핸들러
}
```

#### UI 구조

```
┌─────────────────────────────────┐
│  ProgressBar (currentStep/totalStep)  │
├─────────────────────────────────┤
│  Title: {text}                  │
├─────────────────────────────────┤
│                                 │
│  {children}                     │
│  (단계별 컨텐츠)                │
│                                 │
├─────────────────────────────────┤
│  [다음 버튼] (fixed bottom)     │
└─────────────────────────────────┘
```

#### 구현 요구사항

1. **ProgressBar:**
   - 기존 ProgressBar 컴포넌트 사용
   - props: `totalStep`, `currentStep`

2. **하단 버튼:**
   - `position: fixed` 또는 `position: sticky`
   - 모바일 뷰포트에서 가려지지 않도록 적절한 `padding-bottom` 설정
   - 버튼 텍스트: "다음" (추후 마지막 단계에서 "완료"로 변경 가능)

3. **접근성:**
   - ProgressBar: `role="progressbar"`, `aria-valuenow={currentStep}`, `aria-valuemax={totalStep}`
   - 제목: `<h1>` 또는 `<h2>` 태그 사용

4. **스타일링:**
   - Figma MCP 참조하여 색상, 폰트 적용
   - Emotion styled-components 사용

#### 사용 예시

```tsx
<FunnelLayout
  totalStep={6}
  currentStep={1}
  text="팀명을 입력해주세요"
  moveToNextStep={handleNext}
>
  {/* 현재 단계의 컨텐츠 */}
  <TeamNameInput />
</FunnelLayout>
```

---

### FunnelPage

**목적:** Funnel 전체 상태 관리 및 단계별 렌더링 (Container Component)

#### 구현 요구사항

1. **훅 사용:**

```tsx
const { currentStep, moveToNextStep, moveToPrevStep } = useFunnelStep({
  steps: ['teamName', 'setList', 'session', 'notes', 'review', 'complete']
});

const { funnelData, updateData } = useFunnelData({
  initialData: INITIAL_TECH_RIDER_DATA
});
```

2. **단계별 렌더링 패턴:**

```tsx
const renderStepContent = () => {
  switch (currentStep) {
    case 'teamName':
      return <div>팀명 입력 영역 (빈 공간)</div>;
    case 'setList':
      return <div>세트리스트 입력 영역 (빈 공간)</div>;
    case 'session':
      return <div>세션 구성 입력 영역 (빈 공간)</div>;
    case 'notes':
      return <div>특이사항 입력 영역 (빈 공간)</div>;
    case 'review':
      return <div>최종 검토 영역 (빈 공간)</div>;
    case 'complete':
      return <div>완료 화면 (빈 공간)</div>;
    default:
      return null;
  }
};
```

3. **버튼 핸들러:**

```tsx
const handleNext = () => {
  // 필요시 데이터 업데이트 로직
  // updateData({ ... });

  // 다음 단계로 이동
  moveToNextStep();
};
```

4. **현재 단계 인덱스 계산:**

```tsx
const STEPS: TechRiderStep[] = ['teamName', 'setList', 'session', 'notes', 'review', 'complete'];
const currentStepIndex = STEPS.indexOf(currentStep) + 1; // 1-based index
```

#### 전체 구조 예시

```tsx
const FunnelPage = () => {
  const STEPS: TechRiderStep[] = ['teamName', 'setList', 'session', 'notes', 'review', 'complete'];

  const { currentStep, moveToNextStep, moveToPrevStep } = useFunnelStep({
    steps: STEPS
  });

  const { funnelData, updateData } = useFunnelData({
    initialData: INITIAL_TECH_RIDER_DATA
  });

  const currentStepIndex = STEPS.indexOf(currentStep) + 1;

  const handleNext = () => {
    // 데이터 업데이트 로직 (필요시)
    moveToNextStep();
  };

  const renderStepContent = () => {
    // 위의 switch문 사용
  };

  return (
    <FunnelLayout
      totalStep={STEPS.length}
      currentStep={currentStepIndex}
      text={getStepTitle(currentStep)}
      moveToNextStep={handleNext}
    >
      {renderStepContent()}
    </FunnelLayout>
  );
};
```

---

## 디렉토리 구조

```
src/
├── components/
│   └── domain/
│       └── funnel/
│           ├── FunnelPage.tsx          # Container Component
│           ├── FunnelLayout.tsx        # Presentational Component
│           └── FunnelLayout.styles.ts
├── hooks/
│   └── ui/
│       ├── useFunnelStep.ts
│       └── useFunnelData.ts
└── types/
    └── funnel.ts  # TechRiderStep, TechRiderDataType 등
```

---

## 구현 체크리스트

### 타입 정의
- [ ] `TechRiderStep` 타입 정의
- [ ] `TechRiderDataType` 타입 정의
- [ ] 헬퍼 타입 (`SessionInstrument`, `SessionData`) 정의
- [ ] 초기 데이터 상수 정의

### 훅 구현
- [ ] `useFunnelStep` 구현
  - [ ] 초기값 설정
  - [ ] 경계 조건 처리
- [ ] `useFunnelData` 구현
  - [ ] useReducer 사용
  - [ ] Partial Update 지원

### 컴포넌트 구현
- [ ] `FunnelLayout` 구현
  - [ ] ProgressBar 통합
  - [ ] 하단 고정 버튼
  - [ ] 접근성 속성 추가
  - [ ] Figma 디자인 적용
- [ ] `FunnelPage` 구현
  - [ ] 훅 통합
  - [ ] 단계별 렌더링
  - [ ] 버튼 핸들러

### 테스팅
- [ ] `useFunnelStep` 테스트 (Vitest)
- [ ] `useFunnelData` 테스트 (Vitest)
- [ ] `FunnelLayout` 스토리 작성 (Storybook)
- [ ] 접근성 검사 (a11y addon)

---

## 주의사항

1. **재사용성:**
   - 훅은 제네릭으로 구현하여 다른 Funnel에도 사용 가능하도록
   - TechRider 특화 타입은 FunnelPage에서만 사용

2. **상태 지속성:**
   - 단계 이동 시 `funnelData`가 초기화되지 않도록 주의
   - `updateData`는 기존 데이터를 덮어쓰지 않고 병합

3. **경계 조건:**
   - 첫/마지막 단계에서 이동 함수 호출 시 에러 없이 무시

4. **접근성:**
   - ARIA 속성 필수 적용
   - 키보드 네비게이션 지원

5. **디자인:**
   - Figma MCP 참조
   - 모바일 우선 반응형 디자인

6. **불명확한 요구사항:**
   - 의사결정이 필요한 부분은 사용자에게 질의
