import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

export default function MainTemplate({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  );
}
