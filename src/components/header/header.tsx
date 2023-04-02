import React from 'react';
import { Container } from './styles';
import { Instagram, LocalIcon } from 'assets/icons';
import { ReactComponent as Logo } from 'assets/logo/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="top-line">
        <div>
          <LocalIcon className="local-icon" />
          <a
            className="address"
            href="https://www.google.com/maps/dir//Av.+Nova+York,+1670+-+2%C2%BA+Andar+-+Capelinha,+Betim+-+MG,+32678-620/@-19.9314647,-44.1683182,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa6eb1eed11eca9:0xc4a6be72ee33344f!2m2!1d-44.0982778!2d-19.9314784"
            target="_blank"
            rel="noreferrer"
          >
            Av. Nova York, 1670 - 2º Andar - Capelinha, Betim - MG
          </a>
        </div>
      </div>
      <div className="bottom-line">
        <div>
          <nav className="navbar">
            <Instagram />
            <Logo />
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
