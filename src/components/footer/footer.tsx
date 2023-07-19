import React from 'react';
import { Container } from './styles';

import rhinoImage from 'assets/logo/rhino.svg';

import {
  instagramIcon,
  whatsappIcon,
  localIcon,
  youtubeIcon,
} from 'assets/icons';
import getWhatsappLink from 'helpers/functions/getWhatsappLink';

const Footer: React.FC = () => {
  return (
    <Container>
      <img
        src={rhinoImage}
        className="rhino-image"
        alt="Rinoceronte - logo dh team"
      />
      <div className="shortcuts-container">
        <a href="/#sobre-nos">Sobre nós </a>
        <a href="/depoimentos">Depoimentos</a>
        <a href="/#equipe">Equipe</a>
        <a href="/#galeria">Nossas instalações</a>
        <a href="/parceiros-e-apoiadores">Nossos parceiros</a>
        <a href="/contato">Contato</a>
        <a href="/aulas">Modalidades e horários</a>
        <a href="/o-jiu-jitsu">O Jiu Jitsu</a>
        <a href="/faq">FAQ</a>
      </div>

      <div className="social-container">
        {/* <a className="social">
          <img className="logo" src={facebookIcon} alt="facebook logo" />
          <p className="text">DH TEAM</p>
        </a> */}
        <a
          className="social"
          target="_blank"
          href={getWhatsappLink('5531994655236', false)}
          rel="noreferrer"
        >
          <img className="logo" src={whatsappIcon} alt="whatsapp logo" />
          <p className="text">(31) 99465-5236</p>
        </a>
        <a
          className="social"
          target="_blank"
          href="https://www.instagram.com/dh_team_brazilian_jiujitsu/"
          rel="noreferrer"
        >
          <img className="logo" src={instagramIcon} alt="instagram logo" />
          <p className="text">@dh_team_brazillian_jiujitsu</p>
        </a>
        <a
          className="social"
          target="_blank"
          href="https://www.youtube.com/@DHTEAMBJJ"
          rel="noreferrer"
        >
          <img className="logo" src={youtubeIcon} alt="youtube logo" />
          <p className="text">DH TEAM</p>
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
    </Container>
  );
};

export default Footer;
