import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Fonts */
    --fonts-Lato: Lato, sans-serif;
    --fonts-Gilroy: Gilroy;
    --fonts-Giorgio: Giorgio Sans LCG;

    /* Fonts: Weight */
    --fonts-weights-normal: 400;
    --fonts-weights-semiBold: 600;
    --fonts-weights-bold: 700;

    /* Colors */
    --text-primary: #FFF;
    --text-secondary: #A1A1AA;
    --text-on-light-bg: #010101;
    --Medium-grey: #9D9D9D;
    --background-background: #010101;
    --Rich-black: #121212;
    --background-yellow: #F8E800;
    --background-red: #FF0025;
    --background-foreground: #121212;
    --border-medium: #52525B;

    /* Borders */
    --border-r-S: 8px;
    --border-r-M: 12px;
    --border-r-X: 20px;

    /* Breakpoints */
    --breakpoints-mobile: 320px;
    --breakpoints-tablet: 768px;
    --breakpoints-computer: 992px;
    --breakpoints-desktop: 1200px;
    --breakpoints-widescreen: 1920px;
  }`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-background);
  color: var(--text-primary);
  overflow: hidden;
`;