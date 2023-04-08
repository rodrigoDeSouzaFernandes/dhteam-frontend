import styled from 'styled-components';

export const Container = styled.section`
  padding: 80px 40px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 200px;

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
    width: 100px;
    height: 200px;
    margin-bottom: 50px; //manter os pontos abaixo do item do carousel
  }

  .carousel-container {
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-root {
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
  }
`;
