import { type Image } from 'types/global.types';

export interface Reviews {
  id: number;
  attributes: {
    author: string;
    content: string;
    photo: Image;
  };
}

export interface IuseReviews {
  reviews: Reviews[];
}
