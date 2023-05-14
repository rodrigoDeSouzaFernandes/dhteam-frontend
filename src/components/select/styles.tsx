import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};

  .placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 1rem;
  }

  .btn-toogle-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 12px;
    width: 100%;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;

    svg {
      stroke: ${(props) => props.theme.colors.secondaryText};
      stroke-width: 1px;
      width: 18px;
    }

    .chevron-down {
      display: flex;
      transition: all 0.25s ease-in;
    }

    .upside-down {
      transform: rotate(180deg);
    }
  }

  .options {
    z-index: 1;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-block: 5px;
    background-color: white;
    box-shadow: 1px 1px 3px #a1a1a1;
    border-radius: 3px;

    & > .option {
      border: none;
      background-color: white;
      text-align: left;
      padding: 8px 12px;
      font-family: ${(props) => props.theme.fonts.text};
      font-weight: 500;

      &:hover {
        background-color: #ff9e1b;
        color: white;
      }
    }
  }
`;
