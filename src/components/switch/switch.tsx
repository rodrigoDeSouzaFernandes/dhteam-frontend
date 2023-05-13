import React, { type InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Switch: React.FC<IProps> = ({ type, ...rest }) => {
  return (
    <Container>
      <input type="checkbox" {...rest} />
      <div className="circle"></div>
    </Container>
  );
};

export default Switch;
