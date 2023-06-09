import React from 'react';
import { Container } from './styles';
import { type IProps } from './types';
import noPic from 'assets/other/no-pic.svg';
import { backendUrl } from 'services/api';

const TestmonialCard: React.FC<IProps> = ({ image, name, testmonial }) => {
  const imageUrl = typeof image !== 'string' ? noPic : `${backendUrl}${image}`;

  return (
    <Container>
      <img
        className="profile-image"
        src={imageUrl}
        alt={`foto de perfil: ${String(name)}, autor(a) deste depoimento`}
      />
      <h1 className="name">~ {name}</h1>
      <p className="testmonial">{testmonial}</p>
    </Container>
  );
};

export default TestmonialCard;
