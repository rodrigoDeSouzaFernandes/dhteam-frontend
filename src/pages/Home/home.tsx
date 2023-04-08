import React from 'react';
import { Container } from './styles';
import Header from 'components/header';
import Hero from './hero';
import PartnersAndSupporters from './partnersAndSupporters';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <PartnersAndSupporters />
    </Container>
  );
};

export default Home;
