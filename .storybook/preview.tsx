import type { Preview } from "@storybook/react-vite";
import "../src/styles/global.css";
import React from "react";

export const decorators = [
  (Story) => (
    <div
      style={{
        background: "var(--background)",
        paddingLeft: "var(--layout-padding-x)",
        paddingRight: "var(--layout-padding-y)",
      }}
    >
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
