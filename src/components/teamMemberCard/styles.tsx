import styled from 'styled-components';

import { beltColors } from './beltColors';

import { type CardSize, type BeltColor } from './types';

const sizes = {
  small: {
    cardWidth: '200px',
    cardHeight: '260px',
    imageSize: '150px',
    nameFontSize: '1.2rem',
    gap: '10px',
  },
  large: {
    cardWidth: '300px',
    cardHeight: '400px',
    imageSize: '250px',
    nameFontSize: '1.5rem',
    gap: '20px',
  },
};

interface ContainerProps {
  belt: BeltColor;
  flipped: boolean;
  size: CardSize;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => sizes[props.size].cardWidth};
  height: ${(props) => sizes[props.size].cardHeight};
  position: relative;

  .front {
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
    justify-content: center;
    gap: ${(props) => sizes[props.size].gap};

    overflow: hidden;

    transform: ${(props) =>
      props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};

    .image-container {
      width: ${(props) => sizes[props.size].imageSize};
      height: ${(props) => sizes[props.size].imageSize};
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
      font-size: ${(props) => sizes[props.size].nameFontSize};
      color: ${(props) => props.theme.colors.text};
    }
  }

  .back {
    width: 100%;
    height: 100%;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
      font-size: 0.75rem;
    }

    .latest-graduation {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.secondaryText};
    }

    transform: ${(props) =>
      props.flipped ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  }

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

  .social-media {
    background-color: ${(props) => beltColors[props.belt].primary};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transform: translateY(100%);
    transition: all 0.5s;

    .social-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      transition: all 0.5s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 100%;
      }
    }
  }

  .button-info {
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    border: none;
    top: 12px;
    right: 12px;
  }

  &:hover {
    .social-media {
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 800px) {
    .back {
      .info {
        font-size: 0.9rem;
      }
      gap: 10px;
    }
  }
`;
