import styled from 'styled-components';

export const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: 25% auto; */
  gap: 4px 16px;
  padding: 24px;
  /* border: 1px solid; */
  border-radius: 12px;
  box-shadow: 1px 2px 5px #bbbbbb;

  .profile-image {
    width: 25%;
    aspect-ratio: 1;
    object-fit: cover;
    grid-row: 1 / span 2;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #bbbbbb;
    float: left;
    shape-outside: circle();
    margin-right: 30px;
    margin-bottom: 10px;
  }

  .name {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .testmonial {
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 500;
    font-size: 1rem;
    color: #444;
    padding-left: 10px;
  }
`;
