import React from 'react';
import { Container } from './styles';
import { type Props } from './types';

const Card: React.FC<Props> = ({ time, modality, category, color }) => {
  return (
    <Container color={color}>
      <div>
        <span className="time">{time}</span>
        <h3 className="modality">{modality.toUpperCase()}</h3>
        <span className="category">{category.toUpperCase()}</span>
      </div>
    </Container>
  );
};

export default Card;
