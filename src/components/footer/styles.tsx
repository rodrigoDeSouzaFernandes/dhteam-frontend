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
        width: 16px;
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
`;
