import type { Meta, StoryObj } from "@storybook/react-vite";
import FunnelLayout from "../../components/domain/funnel/FunnelLayout";

const meta: Meta<typeof FunnelLayout> = {
  title: "Domain/Funnel/FunnelLayout",
  component: FunnelLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    moveToNextStep: { action: "moveToNextStep" },
  },
};

export default meta;

type Story = StoryObj<typeof FunnelLayout>;

export const FirstStep: Story = {
  args: {
    totalStep: 6,
    currentStep: 1,
    text: "팀명을 입력해주세요",
    children: <div style={{ padding: "20px", color: "#989898" }}>팀명 입력 영역 (구현 예정)</div>,
  },
};

export const MiddleStep: Story = {
  args: {
    totalStep: 6,
    currentStep: 3,
    text: "세션 악기 구성을 입력해주세요",
    children: (
      <div style={{ padding: "20px", color: "#989898" }}>세션 악기 구성 입력 영역 (구현 예정)</div>
    ),
  },
};

export const LastStep: Story = {
  args: {
    totalStep: 6,
    currentStep: 6,
    text: "제출이 완료되었습니다",
    nextButtonText: "완료",
    children: <div style={{ padding: "20px", color: "#989898" }}>완료 화면 (구현 예정)</div>,
  },
};

export const WithLongContent: Story = {
  args: {
    totalStep: 6,
    currentStep: 2,
    text: "세트리스트를 입력해주세요",
    children: (
      <div style={{ color: "#989898" }}>
        {Array.from({ length: 20 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 테스트용 Mock 데이터이며 순서가 변경되지 않음
          <div key={`song-${i}`} style={{ padding: "16px", borderBottom: "1px solid #333" }}>
            곡 {i + 1}: 제목 입력 영역 (구현 예정)
          </div>
        ))}
      </div>
    ),
  },
};

export const CustomButtonText: Story = {
  args: {
    totalStep: 6,
    currentStep: 5,
    text: "입력한 내용을 확인해주세요",
    nextButtonText: "제출하기",
    children: <div style={{ padding: "20px", color: "#989898" }}>최종 검토 영역 (구현 예정)</div>,
  },
};
