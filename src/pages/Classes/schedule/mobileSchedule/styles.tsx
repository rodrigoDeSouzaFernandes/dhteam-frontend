import styled, { keyframes } from 'styled-components';

const emerge = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin-block: 50px;

  .week-day-selection {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr) auto;
    width: 100%;
    max-width: 400px;
    margin: auto;

    & > button {
      height: 30px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      svg {
        stroke: ${(props) => props.theme.colors.secondaryText};
      }

      &:not(.selected):hover {
        color: ${(props) => props.theme.colors.tertiary};

        svg {
          stroke: ${(props) => props.theme.colors.tertiary};
        }
      }
    }

    & > .day {
      font-family: ${(props) => props.theme.fonts.title};
      color: ${(props) => props.theme.colors.secondaryText};
      font-size: 1rem;
    }

    & > .day.selected {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.black.t3};
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 200px;
    width: 50%;
    margin: 50px auto;

    & > * {
      animation: ${emerge} 0.5s linear;
    }
  }

  @media screen and (min-width: 400px) {
    .week-day-selection {
      & > .day {
        font-size: 1.5rem;
      }

      & > .day.selected {
        font-size: 2rem;
      }
    }
  }
`;
