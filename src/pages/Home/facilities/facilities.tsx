import React from 'react';
import { Container } from './styles';
import { Carousel } from 'react-responsive-carousel';
import useFacilities from './useFacilities';
import { backendUrl } from 'services/api';

const Facilities: React.FC = () => {
  const { photoGallery } = useFacilities();

  return (
    <Container>
      <div className="title">
        <h1>Nossas instalações</h1>
        <p className="subtitle">O local perfeito para sua jornada no esporte</p>
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
        {photoGallery.map((photo) => {
          const imageUrl = `${backendUrl}${photo.attributes.image.data.attributes.url}`;

          return (
            <div
              key={`gallery-photo-${photo.id}`}
              className="gallery-photo-item"
            >
              <img
                src={imageUrl}
                alt={`imagem da galeria ${photo.id}.`}
                className="image"
              />
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Facilities;
