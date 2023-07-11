import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px 20px;
  h1.title {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 2rem;
    color: ${(props) => props.theme.colors.red.t3};
    letter-spacing: 1px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5px;
  }

  p.subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 300;
    text-align: center;
    margin-bottom: 50px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: center;
    width: 100%;
    max-width: 1000px;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin: auto;

    .card {
      width: 150px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: auto;

      img {
        width: 100%;
        border-radius: 100%;
      }

      p {
        text-align: center;
        font-family: ${(props) => props.theme.fonts.title};
        font-size: 1.125rem;
        letter-spacing: 1px;
      }

      .social-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        a {
          text-decoration: none;
          color: black;

          &:hover {
            color: red;
          }
        }
      }
    }
  }

  @media screen and (min-width: 720px) {
    padding: 80px 40px;
  }
`;
