import React, { useMemo, useState } from 'react';
import { Container } from './styles';
import { instagramIcon, whatsappIcon } from 'assets/icons';
import useWindowSize from 'helpers/customHooks/useWindowSize';

const SendMessage: React.FC = () => {
  const defaultMessage =
    'Acessei o site e estou interessado em obter mais informações sobre a DH Team. Você poderia me fornecer detalhes sobre os horários das aulas e os planos disponíveis?"';

  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>(defaultMessage);

  // const sendMessage = (name: string, message: string): void => {};

  // https://api.whatsapp.com/send?phone=seunumerodetelefone&text=sua%20mensagem
  // https://web.whatsapp.com/send?phone=

  const windowSize = useWindowSize();

  const isMobile = windowSize.width < 1000;

  const messageLink = useMemo(() => {
    const greetings = `Olá, meu nome é ${name}. `;
    const text = `${name !== '' ? greetings : ''}\n${message}`;

    return isMobile
      ? `https://api.whatsapp.com/send?phone=553194655236&text=${text}`
      : `https://web.whatsapp.com/send?phone=553194655236&text=${text}`;
  }, [isMobile, message, name]);

  console.log(name, message);

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
          <a
            href="https://www.instagram.com/dh_team_brazilian_jiujitsu/"
            target="_blank"
            rel="noreferrer"
          >
            Aproveite para nos seguir no instagram!
            <img src={instagramIcon} className="instagram-icon" />
          </a>
        </div>
        <form className="form">
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </label>
          <label>
            Mensagem:
            <textarea
              value={message}
              onChange={({ target }) => {
                setMessage(target.value);
              }}
            />
          </label>
          <a
            href={messageLink}
            target="_blank"
            type="button"
            className="send-message-button"
            rel="noreferrer"
          >
            <span>Enviar mensagem via whatsapp </span>{' '}
            <img src={whatsappIcon} />
          </a>
        </form>
      </div>
    </Container>
  );
};

export default SendMessage;
