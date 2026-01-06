import type { Meta, StoryObj } from "@storybook/react-vite";
import Progressbar from "../../components/ui/progressbar/Progressbar";

const meta: Meta<typeof Progressbar> = {
  title: "Component/Progressbar",
  component: Progressbar,
  argTypes: {
    totalSteps: {
      control: { type: "number", min: 1, max: 10 },
      description: "전체 step 수",
    },
    currentStep: {
      control: { type: "number", min: 1, max: 10 },
      description: "현재 step 수",
    },
    ariaLabel: {
      control: "text",
      description: "접근성을 위한 레이블",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progressbar>;

export const Default: Story = {
  args: {
    totalSteps: 5,
    currentStep: 1,
  },
};

export const FirstStep: Story = {
  args: {
    totalSteps: 5,
    currentStep: 1,
  },
};

export const MiddleStep: Story = {
  args: {
    totalSteps: 5,
    currentStep: 3,
  },
};

export const LastStep: Story = {
  args: {
    totalSteps: 5,
    currentStep: 5,
  },
};

export const TwoSteps: Story = {
  args: {
    totalSteps: 2,
    currentStep: 1,
  },
};

export const ManySteps: Story = {
  args: {
    totalSteps: 10,
    currentStep: 5,
  },
};

export const WithCustomAriaLabel: Story = {
  args: {
    totalSteps: 5,
    currentStep: 2,
    ariaLabel: "회원가입 진행 상태",
  },
};

// Edge cases - Props 유효성 검증 테스트
export const EdgeCaseInvalidCurrentStep: Story = {
  name: "Edge Case: currentStep > totalSteps",
  args: {
    totalSteps: 5,
    currentStep: 10, // 자동으로 5로 보정됨
  },
};

export const EdgeCaseZeroCurrentStep: Story = {
  name: "Edge Case: currentStep = 0",
  args: {
    totalSteps: 5,
    currentStep: 0, // 자동으로 1로 보정됨
  },
};

export const EdgeCaseNegativeCurrentStep: Story = {
  name: "Edge Case: currentStep < 0",
  args: {
    totalSteps: 5,
    currentStep: -3, // 자동으로 1로 보정됨
  },
};
