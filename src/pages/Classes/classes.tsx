import React from 'react';
import { Container } from './styles';
import Schedule from './schedule';
import PlansAndPrices from './plansAndPrices/plansAndPrices';

const Classes: React.FC = () => {
  return (
    <Container>
      <Schedule />
      <PlansAndPrices />
    </Container>
  );
};

export default Classes;
