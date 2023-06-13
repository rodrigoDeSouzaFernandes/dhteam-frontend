import { useEffect, useState } from 'react';
import { type Photo, type IuseFacilities } from './types';
import { Api } from 'services/api';

const useFacilities = (): IuseFacilities => {
  const [photoGallery, setPhotoGallery] = useState<Photo[]>([]);

  const getPhotoGallery = (): void => {
    Api.get('/gallery-photos?populate=*')
      .then((response) => {
        setPhotoGallery(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhotoGallery();
  }, []);

  return { photoGallery };
};

export default useFacilities;
