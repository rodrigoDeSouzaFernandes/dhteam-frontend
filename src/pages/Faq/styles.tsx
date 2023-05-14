import styled from 'styled-components';

export const Container = styled.main`
  background-color: white;

  & > .apply-max-width {
    padding: 80px 40px;
  }

  & > div > .title {
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
    font-size: 2rem;
    width: fit-content;
    margin-bottom: 10px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
  }

  .questions-container {
    margin-block: 30px;
  }
`;
