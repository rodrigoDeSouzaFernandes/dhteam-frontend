import React, { type HtmlHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      {text.split(' ').map((word, index) => (
        <span key={`button-word-${index}-${word}`}>{word}</span>
      ))}
    </Container>
  );
};

export default Button;
