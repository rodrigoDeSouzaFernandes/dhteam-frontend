import { type HtmlHTMLAttributes } from 'react';

export type Color = 'blue' | 'pink' | 'black' | 'gray' | 'red' | 'yellow';

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  time: string;
  modality: string;
  category: string;
  color: Color;
}
