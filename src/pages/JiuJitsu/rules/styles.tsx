import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% {
    color: red;
  }
  49% {
    color: red;
  }
  50% {
    color: #222;
  }
  99% {
    color: #222;
  }
  
  100% {
    color: black;
  }
`;

export const Container = styled.section`
  padding: 40px;
  background-color: white;

  .apply-max-width {
    display: grid;
  }

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
    width: fit-content;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.text};
    margin: 0 auto 24px;
    font-size: 1.5rem;
  }

  .subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.secondaryText};
    margin-bottom: 40px;
    text-align: center;
  }

  .rules-container {
    display: grid;

    & > li {
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.9rem;
      color: ${(props) => props.theme.colors.primary};
      background-color: white;
      padding: 12px;
      border-bottom: 1px solid #e5e5e5;
      list-style: none;

      &:nth-child(odd) {
        background-color: #f9f9f9;
      }
    }
  }

  .oss {
    width: fit-content;
    margin-top: 40px;
    justify-self: end;
    position: relative;

    &:hover {
      .oss-description {
        display: block;
      }
    }

    .oss-title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 2rem;
      cursor: default;

      & > span:nth-child(1) {
        animation: ${changeColor} 5s linear infinite;
      }
      & > span:nth-child(2) {
        animation: ${changeColor} 5s linear infinite;
        animation-delay: 0.25s;
      }
      & > span:nth-child(3) {
        animation: ${changeColor} 5s linear infinite;
        animation-delay: 0.5s;
      }
      & > span:nth-child(4) {
        animation: ${changeColor} 5s linear infinite;
        animation-delay: 0.75s;
      }
    }

    .oss-description {
      font-family: ${(props) => props.theme.fonts.text};
      display: none;
      position: absolute;
      right: 0;
      top: calc(100% + 10px);
      background-color: #ffffff;
      padding: 16px;
      width: 600px;
      max-width: calc(100vw - 80px);
      z-index: 1;
      box-shadow: 2px 2px 5px #666;
      border-radius: 8px;
    }
  }

  @media screen and (min-width: 600px) {
    .title {
      margin: 0;
      margin-bottom: 12px;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 80px 40px;

    .subtitle {
      text-align: left;
    }

    .title {
      margin: 0;
      margin-bottom: 12px;
    }

    .rules-container {
      padding-left: 16px;

      & > li {
        list-style: disc;
      }
    }
  }
`;
