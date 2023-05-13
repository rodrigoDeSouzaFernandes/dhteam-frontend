import React from 'react';
import { Container } from './styles';
import Checkbox from 'components/checkbox';
import Switch from 'components/switch';

const PlansAndPrices: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">Planos e preços</h1>
        <p className="subtitle">
          <b>Crie seu plano perfeito:</b>
          <br></br>
          escolha os recursos que mais atendem às suas necessidades e monte um
          plano personalizado de acordo com seu perfil.
        </p>
        <table className="build-custom-plan-table">
          <thead>
            <tr>
              <th>
                <Checkbox checked={false} />
              </th>
              <th>Modalidade</th>
              <th>Categoria</th>
              <th>
                <p>Frequência</p>
                <small>(Dias por semana)</small>
              </th>
              <th>Preço individual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox checked={true} />
              </td>
              <td>
                <p>Jiu jitsu</p>
              </td>
              <td>
                <p>Adulto</p>
              </td>
              <td>
                <div className="frequency">
                  <div>3</div>
                  <Switch checked={true} />
                  <div>5</div>
                </div>
              </td>
              <td>
                <p>
                  <b>R$</b> 120,00
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PlansAndPrices;
