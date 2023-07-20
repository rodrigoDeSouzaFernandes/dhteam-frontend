import { useEffect, useState } from 'react';
import { type IUsePartnersAndSupporters, type Partner } from './types';
import { Api } from 'services/api';

const usePartnersAndSupporters = (): IUsePartnersAndSupporters => {
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

export default usePartnersAndSupporters;
