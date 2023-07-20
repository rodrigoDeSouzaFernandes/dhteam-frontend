import { useEffect, useState } from 'react';
import { type IUsePartners, type Partner } from './types';
import { Api } from 'services/api';

const usePartners = (): IUsePartners => {
  const [partners, setPartners] = useState<Partner[]>([]);

  const getPartners = (): void => {
    Api.get('/partners?populate=*&filters[active][$eq]=true')
      .then((response) => {
        setPartners(response.data.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);

  return { partners };
};

export default usePartners;
