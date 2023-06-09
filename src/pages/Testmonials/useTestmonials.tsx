import { useEffect, useState } from 'react';
import { type IuseTestmonials } from './types';
import { Api } from 'services/api';

const useTestmonials = (): IuseTestmonials => {
  const [testmonials, setTestmonials] = useState([]);

  const getTestmonials = (): void => {
    Api.get('/testmonials?populate=*')
      .then((response) => {
        setTestmonials(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTestmonials();
  }, []);

  return { testmonials };
};

export default useTestmonials;
