import React from 'react';
import { Container } from './styles';
import Hero from './hero';
import PartnersAndSupporters from './partnersAndSupporters';
import AboutUs from './aboutUs';
import Benefits from './benefits';
import Team from './team';
import Facilities from './facilities';
import Reviews from './reviews';

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <PartnersAndSupporters />
      <AboutUs />
      <Benefits />
      <Team />
      <Facilities />
      <Reviews />
    </Container>
  );
};

export default Home;
