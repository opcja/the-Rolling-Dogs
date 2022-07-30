import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    background-color: ${({ theme }) => theme.colors.yellow100};
  }

  ul {
    list-style: none;
  }

  p {
    font-family: 'Lora', serif;
    color: ${({ theme }) => theme.colors.black500};
    letter-spacing: 0.04em;
    line-height: 160%;    
  } 

  a {
    text-decoration: none;
  }

  span {
    font-family: 'Lora', serif;
  }
`;
