import "@emotion/react";
import type theme from "../../styles/globals/theme";

type ExtendedTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends ExtendedTheme {}
}
