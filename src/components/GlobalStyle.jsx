import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #212529;
    --gray100: #333;
    --gray200: #CED4DA;
    --gray300: #EDEDED;
    --white: #FFF;
    --black: #000;
    --green: #02C39A;
    --blue: #003554;
    --purple: #5E548E;
    --red: #DA2C38;
    /* --txt-sm: 16px;
    --txt-md: 20px;
    --txt-lg: 24px;
    --txt-subtitle: 36px;
    --txt-title: 64px; */
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }


  body {
    font-size: 16px;
    line-height: 1.5;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a,
  a:visited {
    cursor: pointer;
    text-decoration: inherit;
    letter-spacing: -0.5px;
  }

  button {
    padding-block: 0;
    padding-inline: 0;
    border-width: 0;
    border: none;
    outline: none;
    letter-spacing: -0.5px;
    background: transparent;
    font-family: 'Noto Sans KR', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  strong {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }


  ul,
  ol,
  li {
    list-style: none;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .inner {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .d-flex {
    display: flex;

    &.align-center {
      align-items: center;
    }
    
    &.justify-center {
      justify-content: center;
    }
  }
`;

export default GlobalStyle;