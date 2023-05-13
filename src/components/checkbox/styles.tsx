import styled from 'styled-components';

export const Container = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.theme.colors.white.t1};
  border: 1px solid ${(props) => props.theme.colors.white.t5};
  border-radius: 3px;

  & > svg {
    display: none;
    stroke: white;
    width: 10px;
    stroke-width: 3px;
  }

  & > input {
    display: none;
  }

  &:has(input:checked) {
    background-color: #ff9e1b;
    border-color: #ff9e1b;

    svg {
      display: block;
    }
  }

  &:has(input:hover:not(:checked)) {
    background-color: ${(props) => props.theme.colors.white.t3};
  }
`;
