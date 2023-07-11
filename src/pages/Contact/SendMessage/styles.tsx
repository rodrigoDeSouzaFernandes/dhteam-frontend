import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 40px 20px;

  .apply-max-width {
    display: grid;
    height: 100%;
  }

  .contact-us {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    background-color: #666;

    .title {
      font-family: ${(props) => props.theme.fonts.title};
      border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
      font-size: 2rem;
      width: fit-content;
      letter-spacing: 1px;
      color: ${(props) => props.theme.colors.secondary};
      margin-bottom: 20px;
    }

    p,
    a {
      max-width: 400px;
      color: ${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.text};
      margin-bottom: 12px;
      font-size: 0.875rem;
    }

    .instagram-icon {
      width: 16px;
      margin-inline: 5px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 40px;
    gap: 20px;

    & > label {
      font-family: ${(props) => props.theme.fonts.text};
      color: ${(props) => props.theme.colors.secondary};
      display: flex;
      flex-direction: column;
      gap: 8px;

      & > input,
      & > textarea {
        padding: 12px 8px;
        border-radius: 8px;
        border: none;
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 0.8rem;
        outline-color: white;
      }

      & > textarea {
        resize: none;
        height: 100px;
      }
    }

    .send-message-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 8px 16px;
      width: fit-content;
      border-radius: 8px;
      outline-color: white;
      border: 1px solid white;
      background-color: #9b0000;
      letter-spacing: 2px;
      font-size: 1rem;
      align-self: end;
      overflow: hidden;
      text-decoration: none;

      & > span {
        color: white;
        font-family: ${(props) => props.theme.fonts.title};
        padding-top: 3px;
        z-index: 1;
      }

      & > img {
        height: 18px;
        z-index: 1;
      }

      position: relative;

      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: green;
        border-radius: 8px;
        top: 0;
        left: 0;
        transform: translateX(-150%);
        transition: all 0.8s;
      }

      &:hover {
        &::before {
          transform: translateX(0%);
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    padding: 0 40px;

    .apply-max-width {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .contact-us {
      padding: 40px;
      min-height: 700px;
      background-color: #666;
    }

    .form {
      padding: none;
      padding-left: 40px;
    }
  }

  @media screen and (min-width: 1280px) {
    .apply-max-width {
      grid-template-columns: auto 1fr;
    }

    .contact-us {
      padding: 100px;
    }
  }
`;
