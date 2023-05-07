import styled from 'styled-components';

interface ContainerProps {
  backgroundImage: string;
}

export const Container = styled.section<ContainerProps>`
  background: url(${(props) => props.backgroundImage});
  padding: 80px 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  z-index: 1;

  &::before {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 95%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .checked-icon {
    width: 12px;
  }

  .benefits-list {
    max-width: 1200px;
    display: grid;
    flex-wrap: wrap;
    gap: 20px;
    margin: auto;

    .benefit {
      vertical-align: top;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.text};
      text-shadow: 5px 5px 5px black;
    }
  }

  @media screen and (min-width: 600px) {
    .benefits-list {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
