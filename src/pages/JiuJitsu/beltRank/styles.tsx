import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px;

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
    font-size: 2rem;
    width: fit-content;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.text};
    margin: 0 auto 24px;
  }

  p {
    font-family: ${(props) => props.theme.fonts.text};
    margin-bottom: 40px;
  }

  .belt-info-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .belt-info {
    display: grid;
    grid-template-rows: 60px repeat(5, 1fr);
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;

    & > p {
      font-family: ${(props) => props.theme.fonts.title};
      text-align: center;
      margin: 10px 20px;
    }

    & > img {
      padding: 10%;
      width: 100%;
    }

    &:nth-child(even) {
      background-color: #e7e7e7;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 80px 40px;

    .title {
      margin: 0;
    }

    p {
      margin: 20px 0 40px;
    }

    .belt-info {
      grid-template-columns: 140px repeat(5, 1fr);
      grid-template-rows: none;
    }

    .belt-info-container {
      display: block;
    }
  }
`;
