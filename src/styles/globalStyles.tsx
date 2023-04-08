import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f7f7f7;
  }
  
  html {
    font-size:12px;
  }

  .apply-max-width {
    max-width: ${(props) => props.theme.defaultMaxWidth};
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }

  .highlight {
    color: ${(props) => props.theme.colors.red.t1};
  }

  @media screen and (min-width: 400px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 800px) {
    html {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
