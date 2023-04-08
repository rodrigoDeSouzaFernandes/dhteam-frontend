import React, { type HtmlHTMLAttributes } from 'react';
import { Primary } from './styles';

enum ButtonTypes {
  primary,
  secondary,
}

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: ButtonTypes;
}

const Button: React.FC<Props> = ({ text, type = 'primary', ...rest }) => {
  const Container = Primary;

  return (
    <Container {...rest}>
      {text.split(' ').map((word, index) => (
        <span key={`button-word-${index}-${word}`}>{word}</span>
      ))}
    </Container>
  );
};

export default Button;
