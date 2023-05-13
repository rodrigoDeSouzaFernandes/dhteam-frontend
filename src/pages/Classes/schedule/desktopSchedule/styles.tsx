import styled from 'styled-components';

export const Container = styled.div`
  margin-block: 50px;

  & > .schedule {
    position: relative;
    max-width: 800px;
    width: 100%;
    margin: auto;
    table-layout: fixed;
    border-spacing: 0;

    thead {
      position: sticky;
      top: 0%;
      bottom: 50%;
      z-index: 1;
    }

    th {
      font-family: ${(props) => props.theme.fonts.title};
      font-weight: 400;
      font-size: 2rem;
      line-height: 58px;
      text-align: center;
      color: #666666;
      max-width: 200px;
      background-color: rgb(247, 247, 247);
      border-bottom: #666666 solid 1px;
    }

    tbody tr:first-child td {
      padding-top: 20px;
    }
  }
`;
