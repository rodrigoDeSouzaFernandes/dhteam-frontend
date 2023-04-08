import styled from 'styled-components';
import { type IconType } from './types';

interface ContainerProps {
  size: number;
  icontype?: IconType;
}

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;

  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  & > img {
    width: 100%;
  }
`;
