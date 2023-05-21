import { createGlobalStyle } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size:12px;
  }

  body {
    background-color: #f7f7f7;
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



body * {
 /* Define a aparência do scrollbar */
::-webkit-scrollbar {
  width: 3px;
}

/* Define a cor da track do scrollbar */
::-webkit-scrollbar-track {
  background-color: #fff;
}

/* Define a cor do thumb do scrollbar */
::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 999px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

/* Define a cor do thumb para os navegadores Firefox e Edge */
scrollbar-color: #ccc #fff;

/* Define a aparência do scrollbar para o Internet Explorer */
*::-ms-scrollbar {
  width: 3px;
}

*::-ms-thumb {
  background-color: #ccc;
  border-radius: 999px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

*::-ms-track {
  background-color: #fff;
}

/* Define a aparência do scrollbar para o navegador Firefox */
* {
  scrollbar-color: #ccc #fff;
}

*::-moz-scrollbar {
  width: 3px;
}

*::-moz-thumb {
  background-color: #ccc;
  border-radius: 999px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

*::-moz-track {
  background-color: #fff;
}

/* Define a aparência do scrollbar para o navegador Edge */
*::-ms-thumb {
  background-color: #ccc;
  border-radius: 999px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

*::-ms-track {
  background-color: #fff;
}

*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 999px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

*::-webkit-scrollbar-track {
  background-color: #fff;
}

}
  

`;

export default GlobalStyle;
