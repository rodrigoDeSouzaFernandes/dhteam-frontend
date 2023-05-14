import React from 'react';
import { MobileFooterContainer } from './styles';
import {
  facebookIcon,
  instagramIcon,
  whatsappIcon,
  localIcon,
} from 'assets/icons';

const MobileFooter: React.FC = () => {
  return (
    <MobileFooterContainer>
      <div className="social">
        <p>Visite nossas redes sociais:</p>
        <a>
          <img className="facebook" alt="facebook icon" src={facebookIcon} />
        </a>
        <a>
          <img className="facebook" alt="facebook icon" src={instagramIcon} />
        </a>
        <a>
          <img className="facebook" alt="facebook icon" src={whatsappIcon} />
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
