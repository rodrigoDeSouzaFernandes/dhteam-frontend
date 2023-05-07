import React from 'react';
import { Container } from './styles';

import rhinoImage from 'assets/logo/rhino.svg';

import {
  facebookIcon,
  instagramIcon,
  whatsappIcon,
  localIcon,
} from 'assets/icons';

const Footer: React.FC = () => {
  return (
    <Container>
      <img
        src={rhinoImage}
        className="rhino-image"
        alt="Rinoceronte - logo dh team"
      />
      <div className="shortcuts-container">
        <a>Sobre nós </a>
        <a>Nossas instalações</a>
        <a>Blog</a>
        <a>Nossa missão</a>
        <a>Depoimentos</a>
        <a>FAQ</a>
        <a>Nossos parceiros</a>
        <a>Modalidades e horários</a>
        <a>Contato</a>
        <a>Equipe</a>
        <a>O Jiu Jitsu</a>
        <a>Planos</a>
      </div>
      <p className="copyright">
        © 2023 Dh team brazillian jiu jitsu. Todos os direitos reservados.
        Desenvolvido e projetado por{' '}
        <a
          href="https://www.linkedin.com/in/rodrigo-de-souza-fernandes/"
          target="_blank"
          rel="noreferrer"
        >
          Rodrigo de Souza Fernandes
        </a>
        .
      </p>
      <div className="social-container">
        <a className="social">
          <img className="logo" src={facebookIcon} alt="fabebook logo" />
          <p className="text">DH TEAM</p>
        </a>
        <a className="social">
          <img className="logo" src={instagramIcon} alt="fabebook logo" />
          <p className="text">@dh_team_brazillian_jiujitsu</p>
        </a>
        <a className="social">
          <img className="logo" src={whatsappIcon} alt="fabebook logo" />
          <p className="text">(31) 91234-5678</p>
        </a>
        <a
          className="social"
          target="_blank"
          href="https://www.google.com/maps/dir//Av.+Nova+York,+1670+-+2%C2%BA+Andar+-+Capelinha,+Betim+-+MG,+32678-620/@-19.9314647,-44.1683182,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa6eb1eed11eca9:0xc4a6be72ee33344f!2m2!1d-44.0982778!2d-19.9314784"
          rel="noreferrer"
        >
          <img className="logo" src={localIcon} alt="fabebook logo" />
          <p className="text">
            Av. Nova York, 1670 - 2º Andar Capelinha, Betim - MG
          </p>
        </a>
      </div>
    </Container>
  );
};

export default Footer;
