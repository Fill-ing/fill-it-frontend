import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react-vite";
import React from "react";
import theme from "../src/styles/globals/theme";
import GlobalStyle from "../src/styles/globals/globalStyle";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.colors.background, height: "100w" }}>
        <GlobalStyle />
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
