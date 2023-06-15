import { type Image } from 'types/global.types';

export interface Partner {
  id: number;
  attributes: {
    name: string;
    logo?: Image;
    active: boolean;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    phone?: string;
    googleMaps?: string;
    description?: string;
    site?: string;
  };
}

export interface IUsePartners {
  partners: Partner[];
}
