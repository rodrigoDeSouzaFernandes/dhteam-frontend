import React from 'react';
import { Container } from './styles';

import { type Props } from './types';

const TeamMemberCard: React.FC<Props> = ({ beltColor, name, ...rest }) => {
  return (
    <Container {...rest} belt={beltColor}>
      <div className="front">
        <div className="image-container">
          <img
            className="profile-picture"
            src="https://f.i.uol.com.br/fotografia/2022/08/07/165988303162efce17b70f3_1659883031_3x2_lg.jpg"
          />
        </div>
        <p className="name">{name}</p>
      </div>
      <div className="back">
        <p className="name">{name}</p>
        <p className="info">{'42 anos'}</p>
        <p className="info">{'Faixa Preta 2 graus'}</p>
        <p className="info">
          {'Campeão master masculino pesado - latino Americano 2023'}
        </p>
        <p className="latest-graduation">{'Graduado em: mar/2022'}</p>
      </div>
    </Container>
  );
};

export default TeamMemberCard;
