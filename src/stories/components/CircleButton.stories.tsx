import type { Meta, StoryObj } from "@storybook/react-vite";
import CircleButton from "../../components/ui/circleButton/CircleButton";

const KakaoIcon = () => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.554 5.086 3.924 6.548l-.998 3.73a.3.3 0 0 0 .46.325l4.54-3.01A11.93 11.93 0 0 0 12 18.6c5.523 0 10-3.477 10-7.8S17.523 3 12 3z"
      fill="#000000"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#696969"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const meta: Meta<typeof CircleButton> = {
  title: "Component/CircleButton",
  component: CircleButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "버튼 배경색 (hex)",
    },
    icon: {
      description: "버튼 내부 아이콘 (ReactNode)",
      control: false,
    },
    "aria-label": {
      control: "text",
      description: "접근성 레이블",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 48, height: 48 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CircleButton>;

export const KakaoButton: Story = {
  args: {
    backgroundColor: "#fee500",
    icon: <KakaoIcon />,
    "aria-label": "카카오톡으로 공유",
  },
};

export const LinkButton: Story = {
  args: {
    backgroundColor: "#e1e1e1",
    icon: <LinkIcon />,
    "aria-label": "링크 복사",
  },
};
