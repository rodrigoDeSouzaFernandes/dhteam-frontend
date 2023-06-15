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
    gap: 40px;
  }
  .see-more-button {
    display: flex;
    padding-inline: 40px;
    border-color: ${(props) => props.theme.colors.tertiary};
    margin: auto;
    margin-top: 30px;
    letter-spacing: 1px;
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

  .partner {
    height: auto;
    margin-bottom: 50px; //manter os pontos abaixo do item do carousel
    margin-top: 75px; //manter os pontos abaixo do item do carousel
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .partner img {
    width: 200px;
    border-radius: 100%;
    object-fit: contain;
    aspect-ratio: 1;
    box-shadow: 3px 1px 15px #c9c9c9;
  }

  .partner .name {
    font-weight: 600;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.text};
    margin-bottom: 20px;
    color: #222;
    text-transform: uppercase;
    cursor: default;
    line-height: 1;
    text-shadow: 3px 3px 2px #c9c9c9;
  }

  .carousel-container {
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .carousel-root {
    max-width: 1400px;
    width: 100%;

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

  @media screen and (min-width: 650px) {
    .title {
      font-size: 3rem;
      letter-spacing: 3px;
    }

    .partner img {
      width: 150px;
    }
  }

  @media screen and (min-width: 1000px) {
    .title {
      font-size: 3rem;
      letter-spacing: 3px;
    }

    .partner img {
      width: 200px;
    }
  }
`;
