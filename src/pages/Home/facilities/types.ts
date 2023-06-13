import { type Image } from 'types/global.types';

export interface IuseFacilities {
  photoGallery: Photo[];
}

export interface Photo {
  id: number;
  attributes: {
    image: Image;
    description: string;
  };
}
