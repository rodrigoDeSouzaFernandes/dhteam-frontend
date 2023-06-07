import React, { useMemo, useState } from 'react';
import { Container } from './styles';

import { type Props } from './types';
import {
  Facebook,
  Icon,
  Instagram,
  Phone,
  Youtube,
} from 'ts-react-feather-icons';
import getWhatsappLink from 'helpers/functions/getWhatsappLink';

const TeamMemberCard: React.FC<Props> = ({
  beltColor,
  name,
  size = 'large',
  instagram,
  facebook,
  whatsapp,
  youtube,
  photo,
  beltRank,
  achievements,
  lastName,
  phone,
  nickname,
  birthDate,
  ...rest
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toogleModal = (): void => {
    setModalOpen((prev) => !prev);
  };

  const socialMediaIconSize = size === 'large' ? 24 : 16;

  const portugueseBelts = {
    white: 'branca',
    blue: 'azul',
    purple: 'roxa',
    brown: 'marrom',
    black: 'preta',
  };

  const insta =
    instagram !== null ? (
      <a
        className="social-item"
        href={instagram}
        target="_blank"
        rel="noreferrer"
      >
        <Instagram size={socialMediaIconSize} />
      </a>
    ) : null;

  const face =
    facebook !== null ? (
      <a
        className="social-item"
        href={facebook}
        target="_blank"
        rel="noreferrer"
      >
        <Facebook size={socialMediaIconSize} />
      </a>
    ) : null;

  const whats =
    whatsapp !== null ? (
      <a
        className="social-item"
        href={getWhatsappLink(String(whatsapp))}
        target="_blank"
        rel="noreferrer"
      >
        <Phone size={socialMediaIconSize} />
      </a>
    ) : null;

  const ytube =
    youtube !== null ? (
      <a
        className="social-item"
        href={youtube}
        target="_blank"
        rel="noreferrer"
      >
        <Youtube size={socialMediaIconSize} />
      </a>
    ) : null;

  const hasSocial = [instagram, youtube, whatsapp, facebook, youtube].some(
    (elem) => elem !== null,
  );

  const age = useMemo(() => {
    const birth = new Date(String(birthDate));
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - birth.getTime();
    const diffInYears = Math.floor(
      diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
    );
    return diffInYears;
  }, [birthDate]);

  return (
    <Container {...rest} belt={beltColor} size={size} beltRank={beltRank}>
      <div className="front">
        <div className="image-container">
          <img
            className="profile-picture"
            src={`http://localhost:1337${String(photo)}`}
          />
        </div>
        <p className="name">{nickname ?? name}</p>
        <div className="social-media">
          {insta}
          {face}
          {whats}
          {ytube}
        </div>
        <button className="button-info" onClick={toogleModal}>
          <Icon
            name="info"
            color="black"
            size={(socialMediaIconSize / 3) * 2}
          />
        </button>
      </div>

      {modalOpen && (
        <div className="back" role="button">
          <div className="content">
            <div className="image-container">
              <img
                className="profile-picture"
                src={`http://localhost:1337${String(photo)}`}
              />
            </div>
            <div className="personal-data">
              <div className="item">
                <span>nome:</span>
                <p>{`${String(name)} ${String(lastName)}`}</p>
              </div>
              <div className="item">
                <span>idade:</span>
                <p>{age}</p>
              </div>
              <div className="item two-columns">
                <span>graduação:</span>
                <p>{`Faixa ${portugueseBelts[beltColor]} ${
                  beltRank !== null ? String(beltRank) + ' graus' : ''
                }`}</p>
              </div>
              {phone !== null && (
                <div className="item ">
                  <span>contato:</span>
                  <p>{phone}</p>
                </div>
              )}
              {hasSocial && (
                <div className="item ">
                  <span>social:</span>
                  <div className="social">
                    {insta}
                    {face}
                    {whats}
                    {ytube}
                  </div>
                </div>
              )}
            </div>
            <div className="achievements">
              {achievements?.split('\n').map((elem, index) => (
                <p key={`achievement-${String(index)}`}>{elem}</p>
              ))}
            </div>

            <button className="button-info" onClick={toogleModal}>
              <Icon
                name="corner-up-left"
                color="white"
                size={(socialMediaIconSize / 3) * 2}
              />
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TeamMemberCard;
