import React, { useContext, useMemo } from 'react';
import { Container } from './styles';
import { Carousel } from 'react-responsive-carousel';

import GlobalContext from 'context/globalContext/globalContext';
import usePartnersAndSupporters from './usePartnersAndSupporters';

const PartnersAndSupporters: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  const centerSlidePercentage = useMemo(
    () => (windowSize.width < 650 ? 100 : 33),
    [windowSize],
  );

  const { partners } = usePartnersAndSupporters();

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
          centerSlidePercentage={centerSlidePercentage}
          centerMode={true}
          swipeScrollTolerance={50}
        >
          {partners.map((partner): React.ReactChild => {
            const {
              id,
              attributes: { logo, name },
            } = partner;

            const image = `http://localhost:1337${String(
              logo?.data.attributes.url,
            )}`;

            return (
              <div className="partner" key={`partner=${String(id)}`}>
                <img src={image} alt={`logo do patrocinador ${String(name)}`} />
                <p data-text={name} className="name reflection">
                  {name}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default PartnersAndSupporters;
