import React from 'react';
import { Container } from './styles';

import hero from 'assets/images/hero.svg';
import logo from 'assets/logo/logo.svg';
import { Carousel } from 'react-responsive-carousel';

const carouselItens = [
  {
    title: 'Arte suave',
    text: 'Jiu Jitsu é uma palavra japonesa que significa arte suave, esse nome é dado devido ao princípio das forças de alavanca onde o praticante pode executar com tranquilidade e eficiência as técnicas em adversários mais fortes e pesados.',
  },
  {
    title: 'Estratégia e Combate',
    text: 'O esporte que mais se assemelha ao jiu jitsu é o xadrez, pois após o momento onde seu adversário substitui o instinto pela técnica é necessário começar a analisar sua jogada para aplicar uma técnica que combata aquela tentativa e assim subsequentemente até que alguém consiga um golpe perfeito e termine a luta, prever e se antecipar ao seu adversário é o que difere um bom lutador de um excepcional.',
  },
  {
    title: 'Nunca é tarde para começar',
    text: 'Por ser uma luta que se desenvolve muito no solo e não tem impacto ou golpes traumáticos como chutes, socos, cotoveladas etc.. o jiu jitsu é a única luta que um praticante acima de 40 anos pode treinar de verdade e se desenvolver, pensando que você pode praticar para sempre esse esporte 40 anos ainda é bem cedo para começar.',
  },
  {
    title: 'Corpo, Mente, Espírito: Harmonia Total',
    text: 'Com o jiu-jitsu, você não apenas melhorará sua forma física e coordenação, mas também desenvolverá habilidades valiosas como autoconfiança, disciplina e respeito. Você fará parte de uma comunidade acolhedora e positiva, onde todos trabalham juntos para alcançar seus objetivos e se apoiar mutuamente.',
  },
];

const Home: React.FC = () => {
  return (
    <Container backgroundImage={hero}>
      <div className="apply-max-width">
        <div className="welcome-section">
          <img src={logo} alt="logo" className="logo" />
          <Carousel
            emulateTouch={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showThumbs={false}
            showIndicators={true}
            centerSlidePercentage={100}
            centerMode={true}
            swipeScrollTolerance={50}
            showArrows={false}
            showStatus={false}
          >
            {carouselItens.map((item, index) => (
              <div className="carousel-item" key={`carousel-item-${index}`}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Home;
