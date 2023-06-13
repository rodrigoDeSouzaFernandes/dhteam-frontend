import styled from 'styled-components';

export const Container = styled.section`
  padding: 80px 40px;
  background: linear-gradient(
    45deg,
    #f7f7f7 25%,
    #fafafa 25%,
    #fafafa 50%,
    #f7f7f7 50%,
    #f7f7f7 75%,
    #fafafa 75%
  );
  background-size: 50px 150px;

  & > .apply-max-width {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
    font-size: 2rem;
    width: fit-content;
    margin-bottom: 10px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
    margin: auto;
  }

  @media screen and (min-width: 400px) {
    .title {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 700px) {
    .title {
      font-size: 3rem;
    }
  }
`;
