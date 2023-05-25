import React from 'react';
import { Container } from './styles';
import { Button } from 'components';
import { instagramIcon, whatsappIcon } from 'assets/icons';

const SendMessage: React.FC = () => {
  enum ButtonTypes {
    primary,
    secondary = 'secondary',
  }
  return (
    <Container>
      <div className="apply-max-width">
        <div className="contact-us">
          <h1 className="title">Fale conosco</h1>
          <p>
            Estamos ansiosos para ouvir de você! Tem alguma dúvida sobre nossas
            aulas ou quer agendar uma visita? Não hesite em nos enviar uma
            mensagem! Nosso time está sempre pronto para ajudar e responder
            todas as suas perguntas. Preencha o formulário ao lado para enviar
            uma mensagem pelo WhatsApp. Estamos aguardando seu contato!
          </p>
          <a href="teste" target="_blank">
            Aproveite para nos seguir no instagram!
            <img src={instagramIcon} className="instagram-icon" />
          </a>
        </div>
        <form className="form">
          <label>
            Nome:
            <input type="text" />
          </label>
          <label>
            Mensagem:
            <textarea />
          </label>
          <button type="button" className="send-message-button">
            <span>Enviar mensagem via whatsapp </span>{' '}
            <img src={whatsappIcon} />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default SendMessage;
