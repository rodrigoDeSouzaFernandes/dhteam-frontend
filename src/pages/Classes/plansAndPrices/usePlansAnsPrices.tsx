import type React from 'react';
import { useEffect, useState } from 'react';
import { Api } from 'services/api';

import {
  type IPlan,
  type IModalityPrice,
  type IusePlansAndPrices,
} from './types';

const usePlansAndPrices = (): IusePlansAndPrices => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  const getPlans = (): void => {
    Api.get('/modality-prices?populate=*')
      .then((response) => {
        setPlans(
          response.data.data.map((plan: IModalityPrice) => ({
            modality: plan.attributes.modality.data.attributes.name,
            category: plan.attributes.modality_category.data.attributes.name,
            frequency: plan.attributes.frequency,
            price: plan.attributes.value,
          })),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPlans();
  }, []);

  return { plans };
};

export default usePlansAndPrices;
