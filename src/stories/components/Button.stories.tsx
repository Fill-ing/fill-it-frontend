import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../../components/ui/button/Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 내 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "버튼 타입",
    },
    onClick: {
      action: "clicked",
      description: "클릭 핸들러",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "테크라이더 만들기",
  },
};

export const Disabled: Story = {
  args: {
    children: "테크라이더 만들기",
    disabled: true,
  },
};
