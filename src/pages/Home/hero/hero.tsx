import React from 'react';
import { Container } from './styles';

import hero from 'assets/images/hero.svg';
import Button from 'components/button';
import logo from 'assets/logo/logo.svg';

const Home: React.FC = () => {
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
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
