import React from 'react';
import { Container } from './styles';
import { Check } from 'ts-react-feather-icons';

const CustomPlan: React.FC = () => {
  return (
    <Container>
      <div className="top">
        <h2>Seu plano customizado:</h2>
        <h3>PLANO INTENSO</h3>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <Check />
            <p>
              Jiu jitsu <span className="highlight">3x / semana</span>
            </p>
          </li>
          <li>
            <Check />
            <p>
              Musculação <span className="highlight">5x / semana</span>
            </p>
          </li>
          <li>
            <Check />
            <p>NO GI</p>
          </li>
        </ul>
        <div className="price-container">
          <p className="old">
            <small>R$</small>160,00
          </p>
          <p className="price">
            <small>R$</small>140,<small>00</small>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CustomPlan;
