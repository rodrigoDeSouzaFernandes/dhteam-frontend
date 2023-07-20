import React, { useMemo } from 'react';
import { Container } from './styles';

import hero from 'assets/images/hero.svg';
import Button from 'components/button';
import logo from 'assets/logo/logo.svg';
import useWindowSize from 'helpers/customHooks/useWindowSize';

const Home: React.FC = () => {
  const windowSize = useWindowSize();

  const isMobile = windowSize.width < 1000;

  const messageLink = useMemo(() => {
    const text =
      'Olá! Ao navegar pelo seu site, fiquei interessado em agendar uma aula experimental. Poderia me fornecer mais informações sobre como proceder?';

    return isMobile
      ? `https://api.whatsapp.com/send?phone=553194655236&text=${text}`
      : `https://web.whatsapp.com/send?phone=553194655236&text=${text}`;
  }, [isMobile]);

  return (
    <Container backgroundImage={hero}>
      <div className="apply-max-width">
        <div className="welcome-section">
          <img src={logo} alt="logo" className="logo" />
          <h1>
            Transforme o seu <span className="highlight">corpo</span> e sua{' '}
            <span className="highlight">mente</span>
          </h1>
          <p>
            Seja bem-vindo ao melhor lugar para se tornar uma versão ainda
            melhor de si mesmo! Aqui na nossa academia, oferecemos mais do que
            apenas um lugar para malhar, oferecemos um lugar onde você pode se
            desafiar, aprender novas habilidades e fazer parte de uma comunidade
            incrível. Venha treinar conosco e descubra o que é ser realmente
            forte, tanto fisicamente quanto mentalmente.
          </p>
          <Button
            text={'Venha fazer uma aula grátis!'}
            className="button-free-trial"
            onClick={() => {
              window.open(messageLink, '_blank');
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
