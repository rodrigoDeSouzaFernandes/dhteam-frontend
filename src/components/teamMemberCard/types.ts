import { type HtmlHTMLAttributes } from 'react';

export type BeltColor = 'black' | 'brown' | 'purple' | 'blue' | 'white';

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  beltColor: BeltColor;
  name: string;
}
