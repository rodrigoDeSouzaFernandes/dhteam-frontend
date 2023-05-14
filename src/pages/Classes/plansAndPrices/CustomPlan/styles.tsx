import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);

  & > .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.red.t2},
      ${(props) => props.theme.colors.red.t4}
    );

    padding: 24px;

    h2,
    h3 {
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 1rem;
      color: ${(props) => props.theme.colors.secondary};
    }

    h3 {
      margin: auto;
    }
  }

  & > .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    padding: 24px;
    background-image: linear-gradient(45deg, #2e3550 75%, #252a3f 75%, #252a3f);
    gap: 20px;

    & > ul {
      li {
        list-style: none;
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 1rem;
        color: ${(props) => props.theme.colors.secondary};
        font-weight: 600;
        margin-block: 15px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 1rem;

        svg {
          width: 15px;
        }

        p {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
      }
    }

    .price-container {
      background-color: gray;
      width: 100%;
      max-width: 150px;
      height: 150px;
      border-radius: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
      padding: 15px;
      margin-block: 20px;

      background-image: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.red.t2},
        ${(props) => props.theme.colors.red.t4}
      );
      .old,
      .price {
        font-family: ${(props) => props.theme.fonts.title};
        color: ${(props) => props.theme.colors.secondary};
        font-weight: 600;
      }

      .old {
        font-size: 1.2rem;

        position: relative;

        &::before {
          transform: rotate(15deg);
          position: absolute;
          left: 0;
          top: 45%;
          content: '';
          width: 100%;
          height: 1px;
          background-color: red;
        }

        &::after {
          transform: rotate(-15deg);
          left: 0;
          top: 45%;
          position: absolute;
          content: '';
          width: 100%;
          height: 1px;
          background-color: red;
        }
      }

      .price {
        font-size: 2.5rem;
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 525px) {
    & > .bottom {
      justify-content: space-between;
      flex-direction: row;
    }

    & > .top {
      h3 {
        margin: 0;
      }
    }
  }
`;
