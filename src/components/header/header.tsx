import React from 'react';
import { Container, NavItem } from './styles';
import { localIcon } from 'assets/icons';
import logo from 'assets/logo/logo.svg';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <div className="top-line">
        <div>
          <a
            className="address"
            href="https://www.google.com/maps/dir//Av.+Nova+York,+1670+-+2%C2%BA+Andar+-+Capelinha,+Betim+-+MG,+32678-620/@-19.9314647,-44.1683182,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa6eb1eed11eca9:0xc4a6be72ee33344f!2m2!1d-44.0982778!2d-19.9314784"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={localIcon}
              alt="ícone que representa localização"
              className="local-icon"
            />
            Av. Nova York, 1670 - 2º Andar - Capelinha, Betim - MG
          </a>
        </div>
      </div>
      <div className="bottom-line">
        <div>
          <img
            src={logo}
            alt="Logo DH TEAM BRASILIAN JIU JITSU"
            className="logo"
          />
          <nav className="navbar">
            <NavItem disabled={pathname === '/'} to="/">
              DH TEAM
            </NavItem>
            <NavItem disabled={pathname === '/aulas'} to="/aulas">
              AULAS
            </NavItem>
            <NavItem disabled={pathname === '/o-jiu-jitsu'} to="/o-jiu-jitsu">
              O JIU-JITSU
            </NavItem>
            {/* <NavItem disabled={false} to="#">
              Blog
            </NavItem> */}
            <NavItem disabled={pathname === '/contato'} to="/contato">
              CONTATO
            </NavItem>
            <NavItem disabled={pathname === '/faq'} to="/faq">
              FAQ
            </NavItem>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
