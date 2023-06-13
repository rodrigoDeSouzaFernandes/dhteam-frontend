import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px 20px;

  background-image: linear-gradient(
    45deg,
    #2e2e2e 25%,
    #333 25%,
    #333 50%,
    #2e2e2e 50%,
    #2e2e2e 75%,
    #333 75%
  );
  color: white;

  background-size: 50px 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .carousel-root {
    width: 100%;
    max-width: 1200px;

    .carousel {
      .thumbs-wrapper {
        .thumbs {
          .thumb {
            aspect-ratio: 3/2;
            object-fit: contain;
          }

          .selected {
            border-color: red;
          }
        }
      }
    }
  }

  .gallery-photo-item {
    /* max-height: 600px; */
    background-color: rgba(0, 0, 0, 0.25);

    img {
      aspect-ratio: 3/2.25;
      max-height: 75vh;
      object-fit: contain;
    }
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
    /* padding: 80px 160px; */
    gap: 40px;

    .title {
      h1 {
        font-size: 3rem;
        letter-spacing: 3px;
      }
    }
  }

  /* @media screen and (min-width: 800px) {
    padding: 80px 160px;
  } */
`;
