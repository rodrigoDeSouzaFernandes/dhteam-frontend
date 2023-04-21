import styled from 'styled-components';

import { beltColors } from './beltColors';

import { type BeltColor } from './types';

interface ContainerProps {
  belt: BeltColor;
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 400px;

  .front {
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    display: grid;
    grid-template-rows: 250px 1fr;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .image-container {
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 1px 1px 3px #e5e5e5;

      background: ${(props) => `
        conic-gradient(
        from 120deg,
        #fff 0deg,
        #fff 1deg,
        ${beltColors[props.belt].secondary} 1deg,
        ${beltColors[props.belt].secondary} 30deg,
        #fff 30deg,
        #fff 31deg,
        ${beltColors[props.belt].primary} 31deg,
        ${beltColors[props.belt].primary} 360deg
      );
      `};

      .profile-picture {
        width: 90%;
        height: 90%;
        border-radius: 50%;
        border: 2px white solid;
      }
    }
    .name {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.text};
    }
  }

  .back {
    width: 100%;
    height: 100%;
    padding: 40px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    color: white;
    background-color: ${(props) => props.theme.colors.primary};

    .name {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 1.5rem;
    }

    .info {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.9rem;
    }

    .latest-graduation {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.secondaryText};
    }

    transform: rotateY(180deg);
  }

  position: relative;

  .front,
  .back {
    position: absolute;
    top: 0px;
    left: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    perspective: 1000000000000px;
    transition: transform 1s;
  }

  &:hover {
    .front {
      transform: rotateY(180deg);
    }

    .back {
      transform: rotateY(0deg);
    }
  }
`;
