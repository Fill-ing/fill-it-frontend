import { useState } from "react";

/** useFunnelStep 훅의 Props 인터페이스 */
export interface UseFunnelStepProps<T> {
  /** 순서가 있는 단계 배열 */
  steps: T[];
}

/** useFunnelStep 훅의 반환 타입 */
export interface UseFunnelStepReturn<T> {
  /** 현재 단계 */
  currentStep: T;
  /** 다음 단계로 이동하는 함수 */
  moveToNextStep: () => void;
  /** 이전 단계로 이동하는 함수 */
  moveToPrevStep: () => void;
}

/**
 * Funnel의 단계 전환 로직을 관리하는 훅
 *
 * @template T - 단계를 나타내는 타입 (예: 'step1' | 'step2' | 'step3')
 * @param props - 단계 배열을 포함하는 설정 객체
 * @returns 현재 단계와 단계 이동 함수들
 *
 * @example
 * ```tsx
 * const { currentStep, moveToNextStep, moveToPrevStep } = useFunnelStep({
 *   steps: ['teamName', 'setList', 'session', 'notes', 'review', 'complete']
 * });
 * ```
 */
export function useFunnelStep<T>({ steps }: UseFunnelStepProps<T>): UseFunnelStepReturn<T> {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const moveToNextStep = () => {
    // 마지막 단계가 아닌 경우에만 다음 단계로 이동
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const moveToPrevStep = () => {
    // 첫 번째 단계가 아닌 경우에만 이전 단계로 이동
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return {
    currentStep: steps[currentStepIndex],
    moveToNextStep,
    moveToPrevStep,
  };
}
