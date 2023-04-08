import styled from 'styled-components';

interface ContainerProps {
  backgroundImage: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: start;
  background: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(5px);
  min-height: 600px;
  padding: 40px;
  padding-bottom: 100px;
  background-attachment: fixed;

  &::before {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 70%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .welcome-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 700px;

    color: ${(props) => props.theme.colors.white.t1};

    h1 {
      font-family: ${(props) => props.theme.fonts.title};
      text-align: center;
    }

    p {
      font-family: ${(props) => props.theme.fonts.text};
      line-height: 140%;
      text-align: center;
    }

    & > .button-free-trial {
      display: flex;
      align-self: flex-end;
      margin-top: 20px;
      width: 100%;
      padding: 5px 10px;
    }
  }

  .logo {
    width: 100%;
    margin: auto;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 400px) {
    .welcome-section {
      & > .button-free-trial {
        width: auto;
        padding: 5px 20px;
      }

      h1,
      p {
        text-align: left;
      }
    }

    .logo {
      max-width: 300px;
    }
  }

  @media screen and (min-width: 800px) {
    .welcome-section {
      & > .button-free-trial {
        width: auto;
        padding: 5px 40px;
      }
      h1,
      p {
        text-align: left;
      }
    }
    .logo {
      display: none;
    }
  }
`;
