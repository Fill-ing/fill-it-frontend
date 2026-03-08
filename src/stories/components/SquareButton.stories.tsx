import type { Meta, StoryObj } from "@storybook/react-vite";
import { MdAnalytics } from "react-icons/md";
import SquareButton from "../../components/ui/squareButton/SquareButton";

const meta: Meta<typeof SquareButton> = {
  title: "Component/SquareButton",
  component: SquareButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "버튼 색상 종류",
    },
    icon: {
      description: "버튼 내부에 표시할 아이콘 (ReactNode)",
      control: false,
    },
    label: {
      control: "text",
      description: "버튼 아래 텍스트",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SquareButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    icon: <MdAnalytics size={48} color="white" aria-hidden />,
    label: "엑셀(CSV) 다운로드",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: <MdAnalytics size={48} color="#989898" aria-hidden />,
    label: "엑셀(CSV) 다운로드",
  },
};
