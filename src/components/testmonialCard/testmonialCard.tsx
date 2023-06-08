import React from 'react';
import { Container } from './styles';

const TestmonialCard: React.FC = () => {
  return (
    <Container>
      <img
        className="profile-image"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        alt=""
      />
      <h1 className="name">~ Nome da Pessoa</h1>
      <p className="testmonial">
        Texto do depoimento Texto do depoimentoTexto do depoimento Texto do
        depoimento Texto do depoimento Texto do depoimento Texto do depoimento
        Texto do depoimento Texto do depoimento Texto do depoimentoTexto do
        depoimento Texto do depoimento Texto do depoimento Texto do depoimento
        Texto do depoimento Texto do depoimento Texto do depoimento Texto do
        depoimentoTexto do depoimento Texto do depoimento Texto do depoimento
        Texto do depoimento Texto do depoimento Texto do depoimento
      </p>
    </Container>
  );
};

export default TestmonialCard;
