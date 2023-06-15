import React from 'react';
import { Container } from './styles';
import usePartners from './usePartners';
import { backendUrl } from 'services/api';
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'ts-react-feather-icons';

const Partners: React.FC = () => {
  const { partners } = usePartners();
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">Parceiros e apoiadores</h1>
        <p className="subtitle">
          Nossa página de parceiros é uma homenagem àqueles que acreditam em
          nossa missão de promover o Jiu Jitsu como um estilo de vida saudável e
          empoderador. Agradecemos imensamente aos nossos parceiros por seu
          apoio inestimável, que nos permite oferecer aos nossos alunos uma
          educação excepcional, instalações de primeira classe e uma comunidade
          forte. Juntos, estamos moldando o futuro do Jiu Jitsu e capacitando
          indivíduos a alcançar seus objetivos.
        </p>
        <section className="partners-list">
          {partners.map((partner) => {
            const logo =
              partner.attributes.logo?.data.attributes.url !== null
                ? `${backendUrl}${String(
                    partner.attributes.logo?.data.attributes.url,
                  )}`
                : '';
            return (
              <div
                key={`partner=${partner.attributes.name}${partner.id}`}
                className="partner"
              >
                <img src={logo}></img>
                <h1>{partner.attributes.name}</h1>
                <p className="description">{partner.attributes.description}</p>
                <div className="social">
                  <a href="#">
                    <Instagram />
                  </a>
                  <a href="#">
                    <Facebook />
                  </a>
                  <a href="#" className="whatsapp">
                    <MessageCircle />
                    <Phone />
                  </a>
                  <a href="#">
                    <MapPin />
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </Container>
  );
};

export default Partners;
