import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #212529;
    --gray100: #333;
    --gray200: #EDEDED;
    --white: #FFF;
    --black: #000;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  }

  button {
    padding-block: 0;
    padding-inline: 0;
    border-width: 0;
    border: none;
    background: transparent;
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