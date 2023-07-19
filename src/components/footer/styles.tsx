import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  70% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
`;

export const Container = styled.footer`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 1fr;
  gap: 40px;
  padding: 40px 80px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  overflow: hidden;

  .rhino-image {
    width: 100%;
    max-width: 150px;
    opacity: 0.8;
  }

  .shortcuts-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr)) auto;
    gap: 16px 50px;
    width: fit-content;
    margin: auto;

    a {
      color: ${(props) => props.theme.colors.white.t1};
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.75rem;
    }
  }

  .copyright {
    grid-column: 1 / span2;
    text-align: center;
    color: ${(props) => props.theme.colors.white.t5};
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 0.7rem;

    a {
      color: ${(props) => props.theme.colors.white.t5};
    }
  }

  .social-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2px;
    background-color: ${(props) => props.theme.colors.black.t3};
    position: absolute;
    right: -2px;
    top: 0;
    height: 100%;
    z-index: 0;

    .social {
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
      padding: 12px 10px;

      &:hover {
        background-color: ${(props) => props.theme.colors.black.t2};
        cursor: pointer;

        .text {
          display: flex;
        }
      }

      .logo {
        width: 18px;
      }
      .text {
        z-index: -1;
        display: none;
        position: absolute;
        align-items: center;
        justify-content: center;
        top: calc(50% - 15px);
        right: 100%;
        width: max-content;
        color: ${(props) => props.theme.colors.black.t5};
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 0.75rem;
        background-color: white;
        height: 30px;
        padding-inline: 20px;
        border-radius: 3px;
        animation: ${slideLeft} 0.25s linear;
        margin-right: 10px;

        &:before {
          content: '';
          position: absolute;
          left: 100%;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid white;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
  }
  @media screen and (min-width: 800px) {
    .shortcuts-container {
      grid-template-columns: repeat(2, minmax(auto, 1fr)) auto;
    }
  }
`;

export const MobileFooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};

  .social {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 12px 30px;
    background-color: white;

    p {
      grid-column: 1 / span 3;
      grid-row: 1;
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
    }

    img {
      width: 28px;
      height: 28px;
    }
  }

  .shortcuts-container {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    gap: 15px 30px;
    padding: 40px;

    a {
      color: ${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.8rem;
    }
  }

  .address {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 40px;
    gap: 12px;
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 0.8rem;
    transition: 0.25s;

    img {
      width: 12px;
      height: 12px;
    }

    &:hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.colors.black.t3};
    }
  }

  .copyright {
    padding: 40px;
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 0.6rem;
    text-align: center;

    a {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media screen and (min-width: 400px) {
    .shortcuts-container {
      grid-template-columns: auto auto auto;
    }
  }
`;
