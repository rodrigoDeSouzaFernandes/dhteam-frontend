import styled from 'styled-components';

export const Container = styled.main`
  background-color: white;
  padding: 80px 40px;

  span.highlight {
    color: ${(props) => props.theme.colors.red.t3};
    margin-left: 5px;
  }

  h1.title {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  p.subtitle {
    font-family: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.secondaryText};
    margin-bottom: 48px;
  }

  .testmonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
  }
`;
