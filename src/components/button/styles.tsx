import styled, { keyframes } from 'styled-components';

const progression = keyframes`
  0% {
    left: -100%;
  }
  50% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

export const Container = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.white.t1};
  color: ${(props) => props.theme.colors.black.t4};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.2rem;
  display: flex;
  gap: 3px;
  padding: 5px 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  z-index: 0;
  transition: all 0.5s;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.red.t3};

  & > span:last-child {
    color: ${(props) => props.theme.colors.red.t1};
    transition: all 0.5s;
  }

  &:hover {
    &::after {
      z-index: -1;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.red.t1},
        ${(props) => props.theme.colors.red.t3}
      );

      left: 0;
      top: 0;
      animation: ${progression} 0.5s linear;
    }
    color: ${(props) => props.theme.colors.white.t1};
    & > span:last-child {
      color: ${(props) => props.theme.colors.white.t1};
    }
    border-color: ${(props) => props.theme.colors.white.t1};
  }
`;
