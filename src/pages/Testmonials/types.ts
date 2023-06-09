import { type Image } from 'types/global.types';

interface Testmonials {
  id: number;
  attributes: {
    author: string;
    content: string;
    photo: Image;
  };
}

export interface IuseTestmonials {
  testmonials: Testmonials[];
}
