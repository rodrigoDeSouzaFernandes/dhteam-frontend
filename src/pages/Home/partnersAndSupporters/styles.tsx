import styled, { keyframes } from 'styled-components';

const teste = keyframes`
  0% {
    opacity: 0;
  }
  100% {
  }
`;

export const Container = styled.section`
  padding: 80px 40px;

  visibility: visible;
  animation: ${teste} 2s linear;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    border-bottom: 3px solid ${(props) => props.theme.colors.tertiary};
    line-height: 0.8;
    width: auto;
    line-height: 100%;
  }

  .subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    max-width: 400px;
    text-align: center;
    color: ${(props) => props.theme.colors.secondaryText};
    padding: 10px 0;
    line-height: 140%;
  }

  @media screen and (min-width: 400px) {
    .title {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }

  @media screen and (min-width: 800px) {
    .title {
      font-size: 3rem;
      letter-spacing: 3px;
    }
  }
`;
