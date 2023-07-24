import React from 'react';
import { Container } from './styles';
import useTeachers from './useTeachers';
import { backendUrl } from 'services/api';
import { Facebook, Instagram, Phone } from 'ts-react-feather-icons';
import getWhatsappLink from 'helpers/functions/getWhatsappLink';

const Teachers: React.FC = () => {
  const { teamMembers } = useTeachers();

  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">
          Fale diretamente com o professor de sua preferência
        </h1>
        <p className="subtitle">
          Escolha o professor com quem mais se identifica e entre em contato
          agora mesmo!
        </p>
        <div className="cards-container">
          {teamMembers.map((teacher) => {
            const profilePhoto = `${backendUrl}${teacher.attributes.profile.data.attributes.url}`;

            const name =
              teacher.attributes.nickname ??
              `${teacher.attributes.firstName} ${teacher.attributes.lastName}`;

            return (
              <div key={`teacher-${teacher.id}`} className="card">
                <img
                  alt={`foto de perfil professor ${teacher.attributes.firstName}`}
                  src={profilePhoto}
                />
                <p className="name">{name}</p>
                <nav className="social-media">
                  {teacher.attributes.instagram !== null && (
                    <a
                      className="social-item"
                      href={teacher.attributes.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                  {teacher.attributes.facebook !== null && (
                    <a
                      className="social-item"
                      href={teacher.attributes.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook size={20} />
                    </a>
                  )}
                  {teacher.attributes.whatsapp !== null && (
                    <a
                      className="social-item"
                      href={getWhatsappLink(
                        String(teacher.attributes.whatsapp),
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Phone size={20} />
                    </a>
                  )}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Teachers;
