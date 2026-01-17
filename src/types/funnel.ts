/** 테크니컬 라이더 Funnel의 단계를 나타내는 타입 */
export type TechRiderStep =
  | "teamName" // 1단계: 팀명 입력
  | "setList" // 2단계: 세트리스트 입력
  | "session" // 3단계: 세션 악기 구성
  | "notes" // 4단계: 특이사항 입력
  | "review" // 5단계: 최종 검토
  | "complete"; // 6단계: 완료

/** 세션에 필요한 악기 정보 */
export interface SessionInstrument {
  /** 악기 이름 (예: "기타", "드럼") */
  instrument: string;
  /** 필요한 악기 개수 */
  count: number;
}

/** 곡별 세션 데이터 */
export interface SessionData {
  /** 곡 ID */
  songId: string;
  /** 해당 곡에 필요한 악기 목록 */
  instruments: SessionInstrument[];
}

/** 테크니컬 라이더 Funnel의 전체 데이터 구조 */
export interface TechRiderDataType {
  /** 팀명 데이터 */
  teamName: {
    name: string;
  };

  /** 세트리스트 데이터 */
  setList: {
    songs: {
      id: string;
      title: string;
      order: number; // 곡 순서
    }[];
  };

  /** 세션 악기 구성 데이터 */
  session: {
    sessions: SessionData[];
  };

  /** 특이사항 데이터 */
  notes: {
    text: string;
  };

  /** 검토 단계 (데이터 입력 없음) */
  review: null;

  /** 완료 단계 (데이터 입력 없음) */
  complete: null;
}

/** 테크니컬 라이더 초기 데이터 */
export const INITIAL_TECH_RIDER_DATA: TechRiderDataType = {
  teamName: { name: "" },
  setList: { songs: [] },
  session: { sessions: [] },
  notes: { text: "" },
  review: null,
  complete: null,
};
