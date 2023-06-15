import styled from 'styled-components';
import { type Color } from './types';

const colors = {
  blue: '#138EFF',
  pink: '#FF69B4',
  black: '#000000',
  gray: '#666666',
  red: '#A20A03',
  yellow: '#F4D03F',
};

interface ContainerProps {
  color: Color;
}

export const Container = styled.div<ContainerProps>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1rem;

  width: 100%;
  padding-bottom: 100%; /* Define a altura igual à largura */
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5%;

    border-radius: 12px;
    border: 2px solid ${(props) => colors[props.color]};
    margin: 2px;
    background-color: ${(props) => props.theme.colors.white.t1};
  }

  .time {
  }
  .modality {
    font-size: 1.75rem;
    align-self: center;
    font-weight: 500;
  }
  .category {
    background-color: ${(props) => colors[props.color]};
    color: ${(props) => props.theme.colors.white.t1};
    padding: 1px 5px;
    border-radius: 5px;
    align-self: flex-end;
  }
`;
