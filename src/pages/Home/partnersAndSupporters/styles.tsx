import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    border-bottom: 3px solid ${(props) => props.theme.colors.tertiary};
    line-height: 0.8;
    width: auto;
    line-height: 100%;
    color: ${(props) => props.theme.colors.text};
  }

  .subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    max-width: 400px;
    text-align: center;
    color: ${(props) => props.theme.colors.secondaryText};
    padding: 10px 0;
    line-height: 140%;
  }

  .partner-logo {
    height: 150px;
    margin-bottom: 50px; //manter os pontos abaixo do item do carousel
    margin-top: 45px; //manter os pontos abaixo do item do carousel
  }

  .carousel-container {
    margin: 0px auto 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-root {
    max-width: 1400px;
    .control-arrow {
      &::before {
        border-right-color: #000;
        border-left-color: #000;
      }
    }

    .control-dots {
      .dot {
        background-color: #000;

        &:hover {
          background-color: red;
        }
      }
      .dot.selected {
        background-color: #000;
      }
    }
  }

  @media screen and (min-width: 400px) {
    padding: 80px 40px;

    .title {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }

  @media screen and (min-width: 800px) {
    .title {
      font-size: 3rem;
      letter-spacing: 3px;
    }

    .partner-logo {
      height: 200px;
    }
  }
`;
