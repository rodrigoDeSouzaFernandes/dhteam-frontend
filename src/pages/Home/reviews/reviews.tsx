import React, { useContext } from 'react';
import { Container } from './styles';
import noPic from '../../../assets/other/no-pic.svg';
import GlobalContext from 'context/globalContext/globalContext';
import { Carousel } from 'react-responsive-carousel';

const Reviews: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  return (
    <Container>
      <div className="apply-max-width">
        <div className="title">
          <p>Veja o que nossos alunos têm a dizer </p>
          <p>sobre a experiência na nossa academia </p>
        </div>
        <div className="reviews-container">
          {windowSize.isMobile ? (
            <Carousel
              emulateTouch={true}
              infiniteLoop={false}
              autoPlay={false}
              interval={5000}
              showThumbs={false}
              showIndicators={true}
              centerSlidePercentage={100}
              centerMode={true}
              swipeScrollTolerance={50}
              showArrows={false}
            >
              <div className="review">
                <img src={noPic} />
                <p className="review-text">
                  &quot;Estou treinando na academia há seis meses e já sinto uma
                  enorme evolução no meu desempenho. A equipe é muito
                  profissional e atenciosa, sempre disposta a ajudar e motivar.
                  Recomendo a todos que querem começar a praticar jiu
                  jitsu!&quot;
                </p>
                <span className="name">~ Sofia Oliveira</span>
              </div>
              <div className="review">
                <img src={noPic} />
                <p className="review-text">
                  &quot;Eu nunca imaginei que seria capaz de fazer jiu jitsu,
                  mas a equipe da academia me fez acreditar que eu posso
                  conquistar qualquer coisa com esforço e dedicação. Eles me
                  ajudaram a superar meus medos e limitações e agora estou
                  amando cada minuto no tatame.&quot;
                </p>
                <span className="name">~ joão santos</span>
              </div>
              <div className="review">
                <img src={noPic} />
                <p className="review-text">
                  &quot;A academia não é só um lugar onde eu vou para treinar, é
                  uma segunda casa. Os instrutores e alunos são como uma família
                  para mim, sempre me apoiando e incentivando. Além disso, as
                  aulas são muito divertidas e desafiadoras, eu nunca me canso
                  de aprender coisas novas.&quot;
                </p>
                <span className="name">~ MIGUEL AUGUSTO</span>
              </div>
            </Carousel>
          ) : (
            <>
              <div className="review">
                <img src={noPic} />
                <p className="review-text">
                  &quot;Estou treinando na academia há seis meses e já sinto uma
                  enorme evolução no meu desempenho. A equipe é muito
                  profissional e atenciosa, sempre disposta a ajudar e motivar.
                  Recomendo a todos que querem começar a praticar jiu
                  jitsu!&quot;
                </p>
                <span className="name">~ Sofia Oliveira</span>
              </div>
              <div className="review">
                <img src={noPic} />
                <p className="review-text">
                  &quot;Eu nunca imaginei que seria capaz de fazer jiu jitsu,
                  mas a equipe da academia me fez acreditar que eu posso
                  conquistar qualquer coisa com esforço e dedicação. Eles me
                  ajudaram a superar meus medos e limitações e agora estou
                  amando cada minuto no tatame.&quot;
                </p>
                <span className="name">~ joão santos</span>
              </div>
              <div className="review">
                <img src={noPic} />
                <p className="review-text">
                  &quot;A academia não é só um lugar onde eu vou para treinar, é
                  uma segunda casa. Os instrutores e alunos são como uma família
                  para mim, sempre me apoiando e incentivando. Além disso, as
                  aulas são muito divertidas e desafiadoras, eu nunca me canso
                  de aprender coisas novas.&quot;
                </p>
                <span className="name">~ MIGUEL AUGUSTO</span>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
