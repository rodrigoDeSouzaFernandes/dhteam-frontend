import { type HtmlHTMLAttributes } from 'react';

export type BeltColor = 'black' | 'brown' | 'purple' | 'blue' | 'white';
export type CardSize = 'small' | 'large';

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  beltColor: BeltColor;
  name: string;
  size: CardSize;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
  phone?: string;
  youtube?: string;
  photo?: string;
  birthDate?: string;
  beltRank: number;
  achievements?: string;
  lastName: string;
  nickname?: string;
}
