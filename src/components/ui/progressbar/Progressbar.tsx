import * as S from "./Progressbar.styles";

/** 퍼널용 프로그래스바 컴포넌트 */
interface ProgressbarProps {
  /** 전체 step 수 */
  totalSteps: number;
  /** 현재 step 수 */
  currentStep: number;
  /** 접근성을 위한 레이블 (선택) */
  ariaLabel?: string;
}

const logProgressWarning = (totalSteps: number, currentStep: number) => {
  if (import.meta.env.VITE_MODE === "development") {
    if (totalSteps < 1) {
      console.warn(`Progressbar: totalSteps는 1 이상이어야 합니다. (받은 값: ${totalSteps})`);
    }
    if (currentStep < 1 || currentStep > totalSteps) {
      console.warn(
        `Progressbar: currentStep은 1~${totalSteps} 범위여야 합니다. (받은 값: ${currentStep})`,
      );
    }
  }
};

const Progressbar = ({ totalSteps, currentStep, ariaLabel }: ProgressbarProps) => {
  logProgressWarning(totalSteps, currentStep);
  // Props 유효성 검증 및 자동 보정
  const validTotalSteps = Math.max(1, totalSteps);
  const validCurrentStep = Math.max(1, Math.min(currentStep, validTotalSteps));

  const progressIndexes = Array.from({ length: validTotalSteps }, (_, i) => i + 1);
  const progressPercent = Math.round((validCurrentStep / validTotalSteps) * 100);

  const renderCircle = (index: number) =>
    validCurrentStep === index ? (
      <S.CurrentCircle>
        <S.BeatedCircle
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatDelay: 0.5 }}
        />
      </S.CurrentCircle>
    ) : validCurrentStep > index ? (
      <S.CompleteCircle />
    ) : (
      <S.IncompleteCircle />
    );

  return (
    <S.Container
      role="progressbar"
      aria-valuenow={validCurrentStep}
      aria-valuemin={1}
      aria-valuemax={validTotalSteps}
      aria-label={ariaLabel || `진행 단계 ${validCurrentStep}/${validTotalSteps}`}
      aria-valuetext={`${progressPercent}% 완료`}
    >
      {progressIndexes.map((index) => (
        <S.Step key={index}>
          {renderCircle(index)}
          {index !== validTotalSteps && <S.Line />}
        </S.Step>
      ))}
    </S.Container>
  );
};

export default Progressbar;
