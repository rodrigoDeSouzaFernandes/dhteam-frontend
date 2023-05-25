import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  .top-line {
    display: flex;
    background-color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 40px;

    & > div {
      max-width: ${(props) => props.theme.defaultMaxWidth};
      width: 100%;

      .address {
        font-family: ${(props) => props.theme.fonts.text};
        color: ${(props) => props.theme.colors.white.t4};
        font-size: 0.75rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;

        &:hover {
          color: ${(props) => props.theme.colors.white.t1};
        }
        .local-icon {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .bottom-line {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: ${(props) => props.theme.colors.white.t1};
    padding: 0 40px;

    & > div {
      max-width: ${(props) => props.theme.defaultMaxWidth};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: auto;
      position: relative;
      padding-left: 200px;

      .logo {
        width: 150px;
        position: absolute;
        left: 0;
        z-index: 1;
      }

      .navbar {
        display: flex;
        align-items: center;
        gap: 40px;
      }
    }
  }
`;

interface NavItemProps {
  disabled: boolean;
}

export const NavItem = styled(Link)<NavItemProps>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.25s;
  position: relative;

  white-space: nowrap;

  &:hover {
    color: ${(props) => props.theme.colors.tertiary};
  }

  &:last-child {
    color: ${(props) => props.theme.colors.tertiary};
  }
  &:before {
    content: '';
    width: 100%;
    min-width: 40px;
    background: linear-gradient(
      90deg,
      #000000 0%,
      #000000 20%,
      #ffffff 20%,
      #ffffff 22%,
      #ff0000 22%,
      #ff0000 38%,
      #ffffff 38%,
      #ffffff 40%,
      #000000 40%
    );
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: ${(props) => (props.disabled ? 'block' : 'none')};
  }
`;

export const MobileHeaderContainer = styled.header`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 20px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.white.t1};
  padding: 0 20px;
  gap: 16px;

  .address {
    text-decoration: none;
    display: flex;
    overflow: hidden;
    gap: 8px;

    p {
      font-family: ${(props) => props.theme.fonts.text};
      color: ${(props) => props.theme.colors.black.t4};
      font-size: 0.75rem;
      align-items: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      display: block;
    }

    &:hover {
      color: ${(props) => props.theme.colors.black.t2};
    }
    .local-icon {
      width: 15px;
      height: 15px;
    }
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white.t2};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  & > a {
    font-size: 3rem;
  }
`;
