import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px 20px;

  background-image: linear-gradient(
    90deg,
    #555,
    #444,
    #333,
    #222,
    #333,
    #444,
    #555
  );
  color: white;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .carousel-root {
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 2rem;
      letter-spacing: 2px;
      text-align: center;
      border-bottom: 3px solid ${(props) => props.theme.colors.tertiary};
      line-height: 0.8;
      width: max-content;
      line-height: 100%;
      color: ${(props) => props.theme.colors.white.t2};
    }
    .subtitle {
      font-family: ${(props) => props.theme.fonts.text};
      max-width: 400px;
      text-align: center;
      color: ${(props) => props.theme.colors.white.t2};
      padding: 10px 0;
      line-height: 140%;
    }
  }

  @media screen and (min-width: 400px) {
    padding: 80px 40px;

    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 2px;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .title {
      h1 {
        font-size: 3rem;
        letter-spacing: 3px;
      }
    }
  }
`;
