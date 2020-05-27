import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    font-family: sans-serif;
    font-family: ${(props) =>
      props.settings.pageFont.value}, Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.fontSize};
    line-height: ${({ theme }) => theme.lineHeight}; 
  }
`;
