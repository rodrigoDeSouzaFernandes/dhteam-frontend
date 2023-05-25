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
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    width: fit-content;
    margin: auto;
  }

  @media screen and (min-width: 500px) {
    .cards-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 720px) {
    .cards-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 720px) {
    padding: 80px 40px;
  }
`;
