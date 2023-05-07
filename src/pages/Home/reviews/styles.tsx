import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px 20px;

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    white-space: nowrap;

    p:last-child {
      padding-left: 50px;
      color: ${(props) => props.theme.colors.tertiaryText};
    }
    p:first-child {
      padding-right: 50px;
    }

    @media screen and (min-width: 300px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 500px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 800px) {
      font-size: 3rem;
    }
  }

  .reviews-container {
    .review {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
      margin-bottom: 40px;

      img {
        width: 50%;
        max-width: 150px;
        border-radius: 50%;
      }

      .review-text {
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 1rem;
        text-align: center;
        max-width: 400px;
        color: ${(props) => props.theme.colors.secondaryText};
      }

      .name {
        font-family: ${(props) => props.theme.fonts.title};
        font-size: 1.5rem;
      }
    }
  }

  //carousel
  .carousel-root {
    max-width: 1400px;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;

    .control-dots {
      .dot {
        background-color: #000;

        &:hover {
          background-color: red;
        }
      }
      .dot.selected {
        background-color: #000;
      }
    }
  }

  @media screen and (min-width: 400px) {
    padding: 80px 40px;
  }

  @media screen and (min-width: 800px) {
    .reviews-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;

      .review {
        .review-text {
          font-size: 0.8rem;
        }
        .name {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .reviews-container {
      gap: 100px;

      .review {
        .review-text {
          font-size: 1.125rem;
        }
        .name {
          font-size: 1.25rem;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .title {
      font-size: 3rem;
    }
    .reviews-container {
      .review {
        .review-text {
          font-size: 1.25rem;
        }
        .name {
          font-size: 1.25rem;
        }
      }
    }
  }
`;
