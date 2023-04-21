import React from 'react';
import { Container } from './styles';
import Header from 'components/header';
import Hero from './hero';
import PartnersAndSupporters from './partnersAndSupporters';
import AboutUs from './aboutUs';
import Benefits from './benefits';
import Team from './team';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <PartnersAndSupporters />
      <AboutUs />
      <Benefits />
      <Team />
    </Container>
  );
};

export default Home;
