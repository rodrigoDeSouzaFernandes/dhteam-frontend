import React, { type InputHTMLAttributes } from 'react';
import { Container } from './styles';
import { Check } from 'ts-react-feather-icons';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<IProps> = ({ ...rest }) => {
  return (
    <Container>
      <input type="checkbox" {...rest} />
      <Check />
    </Container>
  );
};

export default Checkbox;
