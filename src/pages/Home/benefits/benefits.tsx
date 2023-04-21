import React from 'react';
import { Container } from './styles';
import { checkedIcon } from 'assets/icons';
import logo from 'assets/logo/logo.svg';

const Benefits: React.FC = () => {
  const benefits = [
    'Variedade de horários de aulas para se adequar à sua agenda',
    'Professores experientes e dedicados',
    'Ambiente de apoio e incentivo mútuo',
    'Ambiente limpo e bem equipado',
    'Aulas adequadas para todas as idades e níveis de habilidade',
    'Oportunidades de competir e representar a equipe',
    'Foco no desenvolvimento pessoal e autoconfiança',
    'Incentivo à prática de exercícios físicos e hábitos saudáveis',
  ];

  return (
    <Container backgroundImage={logo}>
      <ul className="benefits-list">
        {benefits.map((elem, index) => (
          <li className="benefit" key={`${elem}${index}`}>
            <img
              src={checkedIcon}
              alt="checked-icon"
              className="checked-icon"
            />
            {elem}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Benefits;
