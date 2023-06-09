import React from 'react';
import { Container } from './styles';
import { Carousel } from 'react-responsive-carousel';

import fenixAcademia from 'assets/partners/fenix-academia.svg';
import realBarberShop from 'assets/partners/realbarbershop.svg';

const PartnersAndSupporters: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">Parceiros e apoiadores</h1>
        <p className="subtitle">
          Conheça os apoiadores que fazem parte da nossa história e contribuem
          para nosso sucesso.
        </p>
      </div>
      <div className="apply-max-width carousel-container">
        <Carousel
          emulateTouch={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          showIndicators={true}
          centerSlidePercentage={30}
          centerMode={true}
          swipeScrollTolerance={50}
        >
          <div>
            <img
              src={realBarberShop}
              alt="logo parceiro: real barber shop"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={fenixAcademia}
              alt="logo parceiro: fenix academia"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={realBarberShop}
              alt="logo parceiro: real barber shop"
              className="partner-logo"
            />
          </div>
          <div>
            <img
              src={fenixAcademia}
              alt="logo parceiro: fenix academia"
              className="partner-logo"
            />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default PartnersAndSupporters;
