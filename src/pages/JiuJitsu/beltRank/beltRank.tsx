import React from 'react';
import { Container } from './styles';
import {
  blackBelt,
  brownBelt,
  purpleBelt,
  blueBelt,
  greenBelt,
  orangeBelt,
  yellowBelt,
  grayBelt,
  whiteBelt,
} from 'assets/belts';

const BeltRank: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">A Graduação</h1>
        <p>
          Adotam-se as seguintes divisões de faixas no jiu-jitsu desportivo
          brasileiro para seus praticantes, conforme suas experiências e
          habilidades: e cada associação, federação ou demais tem seu edital
          Particular, sancionado por uma Lei Federal nº 9 615 de 24 de março de
          1998, mais conhecida como Lei Pelé
        </p>
        <div className="belt-info-container">
          <div className="belt-info">
            <p>Faixas de Crianças e Adolescentes</p>
            <img src={whiteBelt} alt="belt" />
            <img src={grayBelt} alt="belt" />
            <img src={yellowBelt} alt="belt" />
            <img src={orangeBelt} alt="belt" />
            <img src={greenBelt} alt="belt" />
          </div>
          <div className="belt-info">
            <p>
              faixas de adultos <br /> (a partir de 16 anos)
            </p>
            <img src={whiteBelt} alt="belt" />
            <img src={blueBelt} alt="belt" />
            <img src={purpleBelt} alt="belt" />
            <img src={brownBelt} alt="belt" />
            <img src={blackBelt} alt="belt" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BeltRank;
