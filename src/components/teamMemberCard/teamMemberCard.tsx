import React, { useState } from 'react';
import { Container } from './styles';

import { type Props } from './types';
import { Icon } from 'ts-react-feather-icons';

const TeamMemberCard: React.FC<Props> = ({
  beltColor,
  name,
  size = 'large',
  ...rest
}) => {
  const [flipped, setFlipped] = useState(false);

  const flip = (): void => {
    setFlipped((prev) => !prev);
  };

  const socialMediaIconSize = size === 'large' ? 24 : 16;

  return (
    <Container {...rest} belt={beltColor} flipped={flipped} size={size}>
      <div className="front">
        <div className="image-container">
          <img
            className="profile-picture"
            src="https://f.i.uol.com.br/fotografia/2022/08/07/165988303162efce17b70f3_1659883031_3x2_lg.jpg"
          />
        </div>
        <p className="name">{name}</p>
        <div className="social-media">
          <a className="social-item" href="#">
            <Icon name="instagram" color="white" size={socialMediaIconSize} />
          </a>
          <a className="social-item" href="#">
            <Icon name="facebook" color="white" size={socialMediaIconSize} />
          </a>

          <a className="social-item" href="#">
            <Icon name="phone" color="white" size={socialMediaIconSize} />
          </a>

          <a className="social-item" href="#">
            <Icon name="youtube" color="white" size={socialMediaIconSize} />
          </a>
        </div>
        <button className="button-info" onClick={flip}>
          <Icon
            name="info"
            color="black"
            size={(socialMediaIconSize / 3) * 2}
          />
        </button>
      </div>
      <div className="back">
        <p className="name">{name}</p>
        <p className="info">{'42 anos'}</p>
        <p className="info">{'Faixa Preta 2 graus'}</p>
        <p className="info">
          {'Campeão master masculino pesado - latino Americano 2023'}
        </p>
        <p className="latest-graduation">{'Graduado em: mar/2022'}</p>
        <button className="button-info" onClick={flip}>
          <Icon
            name="corner-up-left"
            color="white"
            size={(socialMediaIconSize / 3) * 2}
          />
        </button>
      </div>
    </Container>
  );
};

export default TeamMemberCard;
