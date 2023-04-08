import React, { type HTMLAttributes } from 'react';
import { Container } from './styles';
import { type IconType } from './types';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  size?: number;
  type?: IconType;
}

const Icon: React.FC<Props> = ({ src, alt, size = 20, type, ...rest }) => {
  return (
    <Container size={size} icontype={type} {...rest}>
      <img src={src} alt={alt} />
    </Container>
  );
};

export default Icon;
