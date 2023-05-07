import { type HtmlHTMLAttributes } from 'react';

export type BeltColor = 'black' | 'brown' | 'purple' | 'blue' | 'white';
export type CardSize = 'small' | 'large';

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  beltColor: BeltColor;
  name: string;
  size: CardSize;
}
