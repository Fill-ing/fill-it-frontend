import { useReducer } from "react";

/** useFunnelData 훅의 Props 인터페이스 */
export interface UseFunnelDataProps<T> {
  /** 초기 데이터 */
  initialData: T;
}

/** useFunnelData 훅의 반환 타입 */
export interface UseFunnelDataReturn<T> {
  /** 현재 Funnel 데이터 */
  funnelData: T;
  /** 데이터를 부분적으로 업데이트하는 함수 */
  updateData: (data: Partial<T>) => void;
}

/** Funnel 데이터 업데이트 액션 타입 */
type FunnelDataAction<T> = {
  type: "UPDATE";
  payload: Partial<T>;
};

/**
 * Funnel 데이터를 관리하는 Reducer 함수
 *
 * @template T - Funnel 데이터의 타입
 * @param state - 현재 상태
 * @param action - 업데이트 액션
 * @returns 새로운 상태
 */
function funnelDataReducer<T>(state: T, action: FunnelDataAction<T>): T {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

/**
 * Funnel의 입력 데이터 상태를 관리하는 훅
 *
 * @template T - Funnel 데이터의 타입
 * @param props - 초기 데이터를 포함하는 설정 객체
 * @returns 현재 데이터와 업데이트 함수
 *
 * @example
 * ```tsx
 * const { funnelData, updateData } = useFunnelData({
 *   initialData: INITIAL_TECH_RIDER_DATA
 * });
 *
 * // 부분 업데이트
 * updateData({ teamName: { name: 'The Beatles' } });
 * ```
 */
export function useFunnelData<T>({ initialData }: UseFunnelDataProps<T>): UseFunnelDataReturn<T> {
  const [funnelData, dispatch] = useReducer(funnelDataReducer<T>, initialData);

  const updateData = (data: Partial<T>) => {
    dispatch({ type: "UPDATE", payload: data });
  };

  return {
    funnelData,
    updateData,
  };
}
