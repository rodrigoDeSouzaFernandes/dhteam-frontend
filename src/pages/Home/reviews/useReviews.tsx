import { useEffect, useState } from 'react';
import { type Reviews, type IuseReviews } from './types';
import { Api } from 'services/api';

const useReviews = (): IuseReviews => {
  const [reviews, setReviews] = useState<Reviews[]>([]);

  const randomSelection = (items: Reviews[]): Reviews[] => {
    return items
      .sort(() => Math.random() - 0.5)
      .filter((_elem, index) => index <= 2);
  };

  const getReviews = (): void => {
    Api.get('/testmonials?populate=*')
      .then((response) => {
        const obj = randomSelection(response.data.data);
        setReviews(obj);
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
