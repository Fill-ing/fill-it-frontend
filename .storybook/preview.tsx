import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react-vite";
import React from "react";
import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/globalStyle";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#131120", height: "100vh" }}>
        <GlobalStyles />
        <Story />
      </div>
    </ThemeProvider>
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
