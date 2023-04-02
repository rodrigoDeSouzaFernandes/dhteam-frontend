import styled from 'styled-components';

export const Container = styled.header`
  .top-line {
    display: flex;
    background-color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 20px;

    & > div {
      max-width: ${(props) => props.theme.defaultMaxWidth};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;

      .address {
        font-family: ${(props) => props.theme.fonts.text};
        color: ${(props) => props.theme.colors.white.t1};
        font-size: 1rem;
      }
      .local-icon {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
