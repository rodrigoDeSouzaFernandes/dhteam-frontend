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
  size: CardSize;
  beltRank: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => sizes[props.size].cardWidth};
  height: ${(props) => sizes[props.size].cardHeight};

  .front {
    position: relative;
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
        #fff 3deg,
        ${beltColors[props.belt].secondary} 3deg,

        ${
          props.beltRank >= 1
            ? `
            ${beltColors[props.belt].secondary} 8deg,
            #fff 8deg,
            #fff 10deg,
            ${beltColors[props.belt].secondary} 10deg,
`
            : ''
        }
        ${
          props.beltRank >= 2
            ? `
            ${beltColors[props.belt].secondary} 12deg,
            #fff 12deg,
            #fff 14deg,
            ${beltColors[props.belt].secondary} 14deg,
`
            : ''
        }
        ${
          props.beltRank >= 3
            ? `
            ${beltColors[props.belt].secondary} 16deg,
            #fff 16deg,
            #fff 18deg,
            ${beltColors[props.belt].secondary} 18deg,
`
            : ''
        }
        ${
          props.beltRank === 4
            ? `
            ${beltColors[props.belt].secondary} 20deg,
            #fff 20deg,
            #fff 22deg,
            ${beltColors[props.belt].secondary} 22deg,
`
            : ''
        }
        
        ${beltColors[props.belt].secondary} 28deg,
        #fff 28deg,
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
        aspect-ratio: 1;
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
    position: fixed !important;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    padding: 40px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.primary};
    background-color: #00000050;
    backdrop-filter: blur(3px);

    .image-container {
      width: 200px;
      height: 200px;
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
        #fff 3deg,
        ${beltColors[props.belt].secondary} 3deg,

        ${
          props.beltRank >= 1
            ? `
            ${beltColors[props.belt].secondary} 8deg,
            #fff 8deg,
            #fff 10deg,
            ${beltColors[props.belt].secondary} 10deg,
`
            : ''
        }
        ${
          props.beltRank >= 2
            ? `
            ${beltColors[props.belt].secondary} 12deg,
            #fff 12deg,
            #fff 14deg,
            ${beltColors[props.belt].secondary} 14deg,
`
            : ''
        }
        ${
          props.beltRank >= 3
            ? `
            ${beltColors[props.belt].secondary} 16deg,
            #fff 16deg,
            #fff 18deg,
            ${beltColors[props.belt].secondary} 18deg,
`
            : ''
        }
        ${
          props.beltRank === 4
            ? `
            ${beltColors[props.belt].secondary} 20deg,
            #fff 20deg,
            #fff 22deg,
            ${beltColors[props.belt].secondary} 22deg,
`
            : ''
        }
        
        ${beltColors[props.belt].secondary} 28deg,
        #fff 28deg,
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
        aspect-ratio: 1;
      }
    }

    .content {
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 40px;
      width: 100%;
      max-width: 800px;
      max-height: 90vh;
      align-items: start;
      justify-content: space-between;
      overflow: auto;
      border-radius: 12px;
      box-shadow: 0px 5px 0px ${(props) => beltColors[props.belt].primary};
      position: relative;

      .personal-data {
        display: grid;
        grid-template-columns: auto auto;
        height: min-content;
        gap: 20px;
        width: calc(100% - 300px);

        .two-columns {
          grid-column: 1 / span 2;
        }

        .item {
          span {
            font-family: ${(props) => props.theme.fonts.text};
            font-size: 0.8rem;
          }

          p {
            font-family: ${(props) => props.theme.fonts.title};
            font-size: 1.5rem;
            padding-left: 10px;
          }

          .social {
            display: flex;

            a {
              color: black;
              background-color: white;
              width: 34px;
              height: 34px;
              padding: 5px;

              &:hover {
                color: red;
                border-radius: 100%;
              }
            }
          }
        }
      }

      .achievements {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px 0;

        p {
          font-family: ${(props) => props.theme.fonts.text};
          font-size: 14px;
        }
      }
    }
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
      color: white;

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

    svg {
      stroke: black;
    }

    &:hover {
      svg {
        stroke: #444;
      }
    }
  }

  &:hover {
    .social-media {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 800px) {
    .back {
      position: absolute;
      height: calc(100% - 50px);
      padding: 0;
      width: ${(props) => sizes[props.size].cardWidth};
      height: ${(props) => sizes[props.size].cardHeight};
      border-radius: 12px;
      left: auto;

      .image-container {
        width: ${(props) => sizes[props.size].imageSize};
        height: ${(props) => sizes[props.size].imageSize};
      }

      .content {
        align-items: center;
        justify-content: center;
        padding: 20px;

        .personal-data {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 10px;

          .item {
            .social {
              justify-content: center;
            }

            p {
              padding: 0;
            }
          }

          .achievements {
            background-color: red;
            p {
              font-family: ${(props) => props.theme.fonts.text};
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
