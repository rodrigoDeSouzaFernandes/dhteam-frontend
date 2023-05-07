import styled from 'styled-components';

interface ContainerProps {
  backgroundImage: string;
}

export const Container = styled.section<ContainerProps>`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-color: transparent;

  & > div.apply-max-width {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }

  padding: 40px 20px;

  .about-us,
  .our-mission {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
      font-family: ${(props) => props.theme.fonts.title};
      border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
      font-size: 2rem;
      width: fit-content;
      margin-bottom: 10px;
      letter-spacing: 3px;
      color: ${(props) => props.theme.colors.text};
    }

    p {
      font-family: ${(props) => props.theme.fonts.text};
      line-height: 140%;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media screen and (min-width: 400px) {
    & > div.apply-max-width {
      flex-direction: column;
      padding: 80px 40px;
    }

    .about-us,
    .our-mission {
      text-align: start;
      align-items: start;
    }
  }

  @media screen and (min-width: 800px) {
    & > div.apply-max-width {
      flex-direction: row;
    }

    .about-us {
      text-align: end;
      align-items: flex-end;
    }
  }
`;
