import { useEffect, useState } from 'react';
import { type IuseReviews } from './types';
import { Api } from 'services/api';

const useReviews = (): IuseReviews => {
  const [reviews, setReviews] = useState([]);

  console.log({ reviews });

  const getReviews = (): void => {
    Api.get('/testmonials?populate=*')
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return { reviews };
};

export default useReviews;
