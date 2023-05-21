import React from 'react';
import { Container } from './styles';
import History from './history';
import BeltRank from './beltRank';
import Hero from './hero';
import Rules from './rules';

const JiuJitsu: React.FC = () => {
  return (
    <Container>
      <Hero />
      <History />
      <BeltRank />
      <Rules />
    </Container>
  );
};

export default JiuJitsu;
