import styled from 'styled-components';

export const Container = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #ff9e1b;
  width: 30px;
  height: 10px;
  border-radius: 10px;
  position: relative;

  .circle {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    transition: all 0.25s ease-in-out;
    background-color: #fafafa;
    box-shadow: 0 1px 3px;
  }

  & > input {
    display: none;
  }

  &:has(input:checked) {
    .circle {
      right: 0;
      left: calc(100% - 15px);
    }
  }
`;
