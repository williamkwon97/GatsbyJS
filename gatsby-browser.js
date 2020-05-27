import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStateProvider from "./src/pages/store/GlobalStateProvider";
import { theme } from "./src/theme/theme";

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
);
