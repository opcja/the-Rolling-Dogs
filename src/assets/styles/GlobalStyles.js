import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
  background-color: ${({ theme }) => theme.colors.black} ;
  }

  h1 {
    font-size: 150px;
  }
`;
