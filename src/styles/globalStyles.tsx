import { createGlobalStyle } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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


//Definições da barra de scroll da página

  /* Define a cor de fundo do track */
::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.colors.primary};
}

/* Define a cor do thumb */
::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.tertiary};
  border-top:2px solid white;
    border-bottom:2px solid white;
}

/* Define a largura do thumb */
::-webkit-scrollbar-thumb {
  width: 5px;
}

/* Define a cor do thumb para os navegadores Firefox e Edge */
scrollbar-color: ${(props) => props.theme.colors.tertiary} ${(props) =>
  props.theme.colors.primary};

/* Define a aparência do scrollbar para o Internet Explorer */
*::-ms-scrollbar {
  width: 5px;
}

*::-ms-thumb {
  background-color: ${(props) => props.theme.colors.tertiary};
  border-top:2px solid white;
  border-bottom:2px solid white;
}

*::-ms-track {
  background-color: ${(props) => props.theme.colors.primary};
}

/* Define a aparência do scrollbar para o navegador Firefox */
* {
  scrollbar-color: ${(props) => props.theme.colors.tertiary} ${(props) =>
  props.theme.colors.primary};
}

*::-moz-scrollbar {
  width: 5px;
}

*::-moz-thumb {
  background-color: ${(props) => props.theme.colors.tertiary};
  border-top:2px solid white;
    border-bottom:2px solid white;
}

*::-moz-track {
  background-color: ${(props) => props.theme.colors.primary};
}

/* Define a aparência do scrollbar para o navegador Edge */
*::-ms-thumb {
  background-color: ${(props) => props.theme.colors.tertiary};
  border-top:2px solid white;
    border-bottom:2px solid white;
}

*::-ms-track {
  background-color: ${(props) => props.theme.colors.primary};
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.tertiary};
  border-top:2px solid white;
    border-bottom:2px solid white;
}

*::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.colors.primary};
}

`;

export default GlobalStyle;
