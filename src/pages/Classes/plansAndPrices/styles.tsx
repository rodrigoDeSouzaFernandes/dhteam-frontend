import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;

  background-image: linear-gradient(#2f3550, #222);

  .apply-max-width {
    & > .title {
      font-family: ${(props) => props.theme.fonts.title};
      border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
      font-size: 3rem;
      width: fit-content;
      margin-bottom: 10px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.secondary};
      margin: auto;
      margin-bottom: 60px;
    }

    & > .subtitle {
      font-family: ${(props) => props.theme.fonts.text};
      font-size: 1rem;
      color: ${(props) => props.theme.colors.secondary};
      margin-bottom: 20px;
    }
  }

  .build-custom-plan-table {
    width: 100%;
    border-spacing: 0;
    margin-bottom: 60px;
    text-align: left;
    table-layout: unset;

    th {
      background-color: ${(props) => props.theme.colors.red.t3};
      color: ${(props) => props.theme.colors.white.t1};
      font-size: 1rem;
      font-weight: 600;
      font-family: ${(props) => props.theme.fonts.text};
      padding: 12px;
    }

    td {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      font-size: 1rem;
      font-weight: 400;
      font-family: ${(props) => props.theme.fonts.text};
      padding: 12px;
    }

    .th-frequency {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .frequency {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: fit-content;
      margin: auto;

      & > div {
        background-image: linear-gradient(#f4d03f, #cf0f05);
        color: white;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
      }
    }

    .category {
      padding-left: 12px;
    }
  }
`;
