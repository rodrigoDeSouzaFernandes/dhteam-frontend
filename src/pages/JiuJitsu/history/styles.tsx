import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
  padding: 40px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
    font-size: 2rem;
    width: fit-content;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.text};
    margin-inline: auto;
    margin-bottom: 20px;
  }

  p {
    font-family: ${(props) => props.theme.fonts.text};
    margin-block: 5px;
    order: 1;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    order: 6;

    img {
      width: 100%;
      max-width: 200px;
    }

    .name {
      font-weight: 600;
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 0.75rem;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 80px 40px;

    & > div {
      display: block;
    }

    .title {
      margin: 0;
      margin-bottom: 24px;
    }

    p {
      margin-block: 20px;
    }

    aside {
      width: 200px;
      margin: 0 50px;
      float: right;
      padding-top: 0;

      .name {
        align-self: flex-end;
      }
    }
  }
`;
