import Progressbar from "../../ui/progressbar/Progressbar";
import * as S from "./FunnelLayout.styles";

/** FunnelLayout 컴포넌트의 Props 인터페이스 */
interface FunnelLayoutProps {
  /** 전체 단계 수 */
  totalStep: number;
  /** 현재 단계 (1-based index) */
  currentStep: number;
  /** 단계 제목 */
  text: string;
  /** 단계별 컨텐츠 */
  children: React.ReactNode;
  /** 다음 버튼 클릭 핸들러 */
  moveToNextStep: () => void;
  /** 다음 버튼 텍스트 (기본값: "다음") */
  nextButtonText?: string;
}

/**
 * 모든 Funnel 단계의 공통 UI 레이아웃
 *
 * @example
 * ```tsx
 * <FunnelLayout
 *   totalStep={6}
 *   currentStep={1}
 *   text="팀명을 입력해주세요"
 *   moveToNextStep={handleNext}
 * >
 *   <TeamNameInput />
 * </FunnelLayout>
 * ```
 */
const FunnelLayout = ({
  totalStep,
  currentStep,
  text,
  children,
  moveToNextStep,
  nextButtonText = "다음",
}: FunnelLayoutProps) => {
  return (
    <S.Container>
      <S.Header>
        <Progressbar totalSteps={totalStep} currentStep={currentStep} />
      </S.Header>

      <S.Content>
        <S.Title>{text}</S.Title>
        <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      </S.Content>

      <S.Footer>
        <S.NextButton type="button" onClick={moveToNextStep} aria-label={`${nextButtonText} 버튼`}>
          {nextButtonText}
        </S.NextButton>
      </S.Footer>
    </S.Container>
  );
};

export default FunnelLayout;
