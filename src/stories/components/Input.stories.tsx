import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "../../components/ui/input/Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  argTypes: {
    label: {
      control: "text",
      description: "입력 필드 라벨",
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더 텍스트",
    },
    helperText: {
      control: "text",
      description: "에러 또는 도움말 메시지",
    },
    variant: {
      control: "select",
      options: ["default", "error", "success"],
      description: "입력 필드 상태",
    },
    required: {
      control: "boolean",
      description: "필수 입력 여부",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel"],
      description: "입력 타입",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
  },
};

export const WithLabel: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
  },
};

export const Required: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력해주세요",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    helperText: "8자 이상, 영문과 숫자를 포함해주세요",
  },
};

export const Error: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
    value: "invalid-email",
    variant: "error",
    helperText: "올바른 이메일 형식이 아닙니다",
  },
};

export const Success: Story = {
  args: {
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
    value: "사용가능한닉네임",
    variant: "success",
    helperText: "사용 가능한 닉네임입니다",
  },
};

export const Disabled: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
    value: "disabled@email.com",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    required: true,
  },
};
