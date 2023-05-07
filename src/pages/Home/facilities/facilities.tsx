import React from 'react';
import { Container } from './styles';
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazyload';

const Facilities: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <div className="title">
          <h1>Nossas instalações</h1>
          <p className="subtitle">
            O local perfeito para sua jornada no esporte
          </p>
        </div>
        <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showThumbs={true}
          showIndicators={true}
          centerSlidePercentage={100}
          centerMode={true}
          swipeScrollTolerance={50}
        >
          <div>
            <LazyLoad>
              <img
                src={
                  'https://news.gympass.com/wp-content/uploads/2018/07/escolher-a-melhor-academia.jpg'
                }
                alt="logo parceiro: real barber shop"
                className="partner-logo"
              />
            </LazyLoad>
          </div>
          <div>
            <img
              src={
                'https://news.gympass.com/wp-content/uploads/2018/07/escolher-a-melhor-academia.jpg'
              }
              alt="logo parceiro: fenix academia"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={
                'https://news.gympass.com/wp-content/uploads/2018/07/escolher-a-melhor-academia.jpg'
              }
              alt="logo parceiro: real barber shop"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={
                'https://news.gympass.com/wp-content/uploads/2018/07/escolher-a-melhor-academia.jpg'
              }
              alt="logo parceiro: fenix academia"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={
                'https://news.gympass.com/wp-content/uploads/2018/07/escolher-a-melhor-academia.jpg'
              }
              alt="logo parceiro: real barber shop"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={
                'https://news.gympass.com/wp-content/uploads/2018/07/escolher-a-melhor-academia.jpg'
              }
              alt="logo parceiro: fenix academia"
              className="partner-logo"
            />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Facilities;
