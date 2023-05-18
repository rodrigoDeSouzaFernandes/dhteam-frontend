import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.colors.white.t5};

  .title {
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    padding: 12px;
    background-color: transparent;
    border: none;

    color: black;
    gap: 20px;
    text-align: left;
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 500;
    font-size: 0.8rem;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      stroke: ${(props) => props.theme.colors.black.t5};
      stroke-width: 1px;
    }

    &:hover {
      background-color: rgb(247, 247, 247);
    }
  }
  .content {
    width: 100%;
    padding: 12px 24px 24px;
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 300;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.black.t3};
  }
`;
