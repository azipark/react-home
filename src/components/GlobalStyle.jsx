import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #212529;
    /* --secondary: ; */
    --gray1: #ededed;
    --white: #FFF;
    --black: #000;
    --font-size-xl: ;
    --font-size-lg: ;
    --font-size-md: ;
    --font-size-sm: ;
    --font-size-xs: ;
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
    color: #212529;
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
`;

// const Paragraph = styled.p`
//   font-weight: 400;
//   line-height: 1.5;
// `;

// const Button =  styled.button`
//   display: inline-block;

// `;

export default GlobalStyle;