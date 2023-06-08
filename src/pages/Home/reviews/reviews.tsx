import React, { type ReactChild, useContext } from 'react';
import { Container } from './styles';
import noPic from '../../../assets/other/no-pic.svg';
import GlobalContext from 'context/globalContext/globalContext';
import { Carousel } from 'react-responsive-carousel';
import useReviews from './useReviews';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';

const Reviews: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  const navigate = useNavigate();

  const { reviews } = useReviews();

  const redirectToReviewsPage = (): void => {
    navigate('/depoimentos');
  };

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
              {reviews.map((review, index): ReactChild => {
                console.log(review.attributes.photo?.data?.attributes?.url);
                const image =
                  typeof review.attributes.photo?.data?.attributes?.url ===
                  'string'
                    ? `http://localhost:1337${review.attributes.photo?.data?.attributes?.url}`
                    : noPic;

                return (
                  <div className="review" key={`review-item=${index}`}>
                    <img src={image} />
                    <p className="review-text">{review.attributes.content}</p>
                    <span className="name">~ {review.attributes.author}</span>
                  </div>
                );
              })}
            </Carousel>
          ) : (
            <>
              {reviews.map((review, index): ReactChild => {
                console.log(review.attributes.photo?.data?.attributes?.url);
                const image =
                  typeof review.attributes.photo?.data?.attributes?.url ===
                  'string'
                    ? `http://localhost:1337${review.attributes.photo?.data?.attributes?.url}`
                    : noPic;

                return (
                  <div className="review" key={`review-item=${index}`}>
                    <img src={image} />
                    <p className="review-text">{review.attributes.content}</p>
                    <span className="name">~ {review.attributes.author}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <Button
          text="ver mais"
          className="see-more-btn"
          onClick={redirectToReviewsPage}
        />
      </div>
    </Container>
  );
};

export default Reviews;
