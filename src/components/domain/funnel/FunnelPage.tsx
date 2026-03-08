import { useFunnelData } from "../../../hooks/ui/useFunnelData";
import { useFunnelStep } from "../../../hooks/ui/useFunnelStep";
import {
  INITIAL_TECH_RIDER_DATA,
  type TechRiderDataType,
  type TechRiderStep,
} from "../../../types/funnel";
import FunnelLayout from "./FunnelLayout";

/** 단계별 제목을 반환하는 함수 */
const getStepTitle = (step: TechRiderStep): string => {
  const titles: Record<TechRiderStep, string> = {
    teamName: "팀명을 입력해주세요",
    setList: "세트리스트를 입력해주세요",
    session: "세션 악기 구성을 입력해주세요",
    notes: "특이사항을 입력해주세요",
    review: "입력한 내용을 확인해주세요",
    complete: "제출이 완료되었습니다",
  };
  return titles[step];
};

const getButtonText = (step: TechRiderStep): string => {
  if (step === "review") return "제출하기";
  if (step === "complete") return "완료";
  return "다음";
};

/**
 * Funnel 전체 상태 관리 및 단계별 렌더링을 담당하는 컨테이너 컴포넌트
 */
const FunnelPage = () => {
  const STEPS: TechRiderStep[] = ["teamName", "setList", "session", "notes", "review", "complete"];

  // biome-ignore lint/correctness/noUnusedVariables: moveToPrevStep은 추후 기능 구현 시 사용 예정
  const { currentStep, moveToNextStep, moveToPrevStep } = useFunnelStep({
    steps: STEPS,
  });

  // biome-ignore lint/correctness/noUnusedVariables: updateData는 추후 기능 구현 시 사용 예정
  const { funnelData, updateData } = useFunnelData<TechRiderDataType>({
    initialData: INITIAL_TECH_RIDER_DATA,
  });

  const currentStepIndex = STEPS.indexOf(currentStep) + 1;

  const handleNext = () => {
    // TODO: 단계별 validation 로직 추가
    // TODO: 데이터 업데이트 로직 추가 (필요시)

    moveToNextStep();
  };

  // TODO : 실제 컴포넌트로 대체 필요
  const renderStepContent = () => {
    switch (currentStep) {
      case "teamName":
        return (
          <div style={{ padding: "20px", color: "#989898" }}>
            <p>팀명 입력 영역 (구현 예정)</p>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>
              현재 팀명: {funnelData.teamName.name || "(미입력)"}
            </p>
          </div>
        );

      case "setList":
        return (
          <div style={{ padding: "20px", color: "#989898" }}>
            <p>세트리스트 입력 영역 (구현 예정)</p>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>
              현재 곡 수: {funnelData.setList.songs.length}개
            </p>
          </div>
        );

      case "session":
        return (
          <div style={{ padding: "20px", color: "#989898" }}>
            <p>세션 악기 구성 입력 영역 (구현 예정)</p>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>
              현재 세션 수: {funnelData.session.sessions.length}개
            </p>
          </div>
        );

      case "notes":
        return (
          <div style={{ padding: "20px", color: "#989898" }}>
            <p>특이사항 입력 영역 (구현 예정)</p>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>
              현재 특이사항: {funnelData.notes.text || "(미입력)"}
            </p>
          </div>
        );

      case "review":
        return (
          <div style={{ padding: "20px", color: "#989898" }}>
            <p>최종 검토 영역 (구현 예정)</p>
            <div style={{ marginTop: "20px", fontSize: "14px" }}>
              <p>• 팀명: {funnelData.teamName.name || "(미입력)"}</p>
              <p>• 세트리스트: {funnelData.setList.songs.length}곡</p>
              <p>• 세션 구성: {funnelData.session.sessions.length}개</p>
              <p>• 특이사항: {funnelData.notes.text || "(미입력)"}</p>
            </div>
          </div>
        );

      case "complete":
        return (
          <div style={{ padding: "20px", color: "#989898", textAlign: "center" }}>
            <p>✓ 테크니컬 라이더 제출이 완료되었습니다</p>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>입력하신 내용은 저장되었습니다.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <FunnelLayout
      totalStep={STEPS.length}
      currentStep={currentStepIndex}
      text={getStepTitle(currentStep)}
      moveToNextStep={handleNext}
      nextButtonText={getButtonText(currentStep)}
    >
      {renderStepContent()}
    </FunnelLayout>
  );
};

export default FunnelPage;
