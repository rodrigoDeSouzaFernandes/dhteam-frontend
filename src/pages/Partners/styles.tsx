import styled from 'styled-components';

export const Container = styled.main`
  background: linear-gradient(
    45deg,
    #ffffff 25%,
    #fafafa 25%,
    #fafafa 50%,
    #ffffff 50%,
    #ffffff 75%,
    #fafafa 75%
  );
  background-size: 50px 150px;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 80px 40px;
  }

  h1.title {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 24px;
    font-size: 3rem;
    border-bottom: 2px solid red;
    width: fit-content;
    line-height: 1;
  }

  p.subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.secondaryText};
    margin-bottom: 48px;
  }

  .partners-list {
    display: grid;
    gap: 30px;

    .partner {
      display: grid;
      grid-template-columns: 150px 1fr;
      grid-template-rows: auto 1fr auto;
      gap: 10px 40px;
      padding: 30px 40px;
      box-shadow: 3px 3px 10px #c9c9c9;
      border-radius: 12px;
      background-color: white;

      img {
        border-radius: 100%;
        box-shadow: 0px 0px 5px #c9c9c9;
        width: 150px;
        grid-row: 1 / span 3;
      }

      h1 {
        font-family: ${(props) => props.theme.fonts.title};
        color: ${(props) => props.theme.colors.primary};
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 2rem;
      }

      .description {
        font-family: ${(props) => props.theme.fonts.text};
        color: ${(props) => props.theme.colors.secondaryText};
        font-size: 1rem;
      }

      .social {
        display: flex;
        gap: 8px;
        justify-content: end;
        align-items: start;

        a {
          color: black;

          &:hover {
            color: red;
          }
        }
      }
    }
  }

  .whatsapp {
    display: flex;
    position: relative;
    width: 25px;
    height: 25px;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    svg:first-child {
      width: 100%;
    }
    svg:nth-child(2) {
      width: 40%;
    }
  }
`;
