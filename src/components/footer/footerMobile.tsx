import React from 'react';
import { MobileFooterContainer } from './styles';
import {
  facebookIcon,
  instagramIcon,
  whatsappIcon,
  localIcon,
  youtubeIcon,
} from 'assets/icons';
import getWhatsappLink from 'helpers/functions/getWhatsappLink';

const MobileFooter: React.FC = () => {
  return (
    <MobileFooterContainer>
      <div className="social">
        <p>Visite nossas redes sociais:</p>
        <a
          target="_blank"
          href={getWhatsappLink('5531994655236', true)}
          rel="noreferrer"
        >
          <img alt="facebook icon" src={whatsappIcon} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/dh_team_brazilian_jiujitsu/"
          rel="noreferrer"
        >
          <img alt="facebook icon" src={instagramIcon} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@DHTEAMBJJ"
          rel="noreferrer"
        >
          <img alt="facebook icon" src={youtubeIcon} />
        </a>
      </div>
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
      <a className="address">
        <img src={localIcon} alt="icone de localização" />
        Av. Nova York, 1670 - 2º Andar Capelinha, Betim - MG
      </a>
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
    </MobileFooterContainer>
  );
};

export default MobileFooter;
