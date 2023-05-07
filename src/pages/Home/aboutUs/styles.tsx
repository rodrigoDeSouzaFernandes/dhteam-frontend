import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${(props) => props.theme.defaultMaxWidth};
  margin: auto;
  padding: 40px 20px;
  gap: 40px;

  .about-us,
  .our-mission {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
      font-family: ${(props) => props.theme.fonts.title};
      border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
      font-size: 2rem;
      width: fit-content;
      margin-bottom: 10px;
      letter-spacing: 3px;
      color: ${(props) => props.theme.colors.text};
    }

    p {
      font-family: ${(props) => props.theme.fonts.text};
      line-height: 140%;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media screen and (min-width: 400px) {
    flex-direction: column;
    padding: 80px 40px;

    .about-us,
    .our-mission {
      text-align: start;
      align-items: start;
    }
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    .about-us {
      text-align: end;
      align-items: flex-end;
    }
  }
`;
