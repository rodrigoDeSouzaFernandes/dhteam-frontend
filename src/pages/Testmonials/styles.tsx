import styled from 'styled-components';

export const Container = styled.main`
  background-color: white;
  padding: 80px 40px;

  background: linear-gradient(
    45deg,
    #ffffff 25%,
    #f9f9f9 25%,
    #f9f9f9 50%,
    #ffffff 50%,
    #ffffff 75%,
    #f9f9f9 75%
  );
  background-size: 50px 150px;

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
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media screen and (min-width: 400px) {
    .testmonials {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;
