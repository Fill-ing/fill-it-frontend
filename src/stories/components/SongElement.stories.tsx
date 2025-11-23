import type { Meta, StoryObj } from "@storybook/react-vite";
import SongElement from "../../components/ui/domain/SongElement";

const meta: Meta<typeof SongElement> = {
  title: "Component/SongElement",
  component: SongElement,
};

export default meta;

type Story = StoryObj<typeof SongElement>;

const mockData = {
  imgSrc: "https://picsum.photos/300/300",
  songTitle: "우주의 꿈",
  artist: "작가입니다",
};

export const Default: Story = {
  args: {
    ...mockData,
    showActions: false,
  },
};

export const ShowAction: Story = {
  args: {
    ...mockData,
    showActions: true,
  },
};
