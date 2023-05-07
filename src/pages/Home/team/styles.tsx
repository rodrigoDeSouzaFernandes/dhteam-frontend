import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
    font-size: 3rem;
    width: fit-content;
    margin-bottom: 10px;
    letter-spacing: 3px;
    color: ${(props) => props.theme.colors.text};
    margin: auto;
  }

  .subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    max-width: 600px;
    text-align: center;
    color: ${(props) => props.theme.colors.secondaryText};
    padding: 10px 0;
    line-height: 140%;
  }

  & > .members {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: auto;
    max-width: 1400px;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    min-height: 300px;

    .team-member-card {
      margin-bottom: 50px;
    }
  }

  .carousel-root {
    max-width: 1400px;
    width: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;

    li.slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .control-arrow {
      &::before {
        border-right-color: #000;
        border-left-color: #000;
      }
    }

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
    & > .members {
      min-height: 450px;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 80px 40px;

    & > .members {
      display: grid;
      grid-template-columns: repeat(2, auto);

      .team-member-card {
        margin-bottom: 0px;
      }
    }
  }
  @media screen and (min-width: 1100px) {
    & > .members {
      display: grid;
      grid-template-columns: repeat(3, auto);
    }
  }
  @media screen and (min-width: 1450px) {
    & > .members {
      display: grid;

      grid-template-columns: repeat(4, auto);
    }
  }
`;
