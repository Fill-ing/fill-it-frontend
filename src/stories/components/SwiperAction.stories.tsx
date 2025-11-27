import type { Meta, StoryObj } from "@storybook/react-vite";
import SwiperAction from "../../components/ui/swiperAction/SwiperAction";

const meta: Meta<typeof SwiperAction> = {
  title: "Component/SwiperAction",
  component: SwiperAction,
};

export default meta;

type Story = StoryObj<typeof SwiperAction>;

const mockElement = [
  <div key={0} style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
    0
  </div>,
  <div key={1} style={{ width: "100px", height: "100px", backgroundColor: "blue" }}>
    1
  </div>,
];

export const Default: Story = {
  args: { swiperElement: mockElement },
};
