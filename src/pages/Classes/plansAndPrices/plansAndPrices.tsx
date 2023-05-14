import React, { useState } from 'react';
import { Container } from './styles';
import Checkbox from 'components/checkbox';
import Switch from 'components/switch';
import Select from 'components/select/select';
import { type Option } from 'types/select.types';
import CustomPlan from './CustomPlan/customPlan';

const mockModalities = [
  {
    id: 1,
    name: 'Jiu jitsu',
    category: 'Adulto',
    daysPerWeek: 3,
    price: 100,
  },
  {
    id: 1,
    name: 'Jiu jitsu',
    category: 'Adulto',
    daysPerWeek: 5,
    price: 120,
  },
  {
    id: 1,
    name: 'Jiu jitsu',
    category: 'Infantil',
    daysPerWeek: 3,
    price: 80,
  },
  {
    id: 2,
    name: 'No GI',
    category: 'Adulto',
    daysPerWeek: 2,
    price: 80,
  },
  {
    id: 3,
    name: 'Musculação',
    category: 'Adulto',
    daysPerWeek: 3,
    price: 50,
  },
  {
    id: 3,
    name: 'Musculação',
    category: 'Adulto',
    daysPerWeek: 5,
    price: 70,
  },
];

const PlansAndPrices: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState<Option | null>(null);

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
        <div className="build-custom-plan-table custom-scroll">
          <table>
            <thead>
              <tr>
                <th>
                  <Checkbox checked={false} />
                </th>
                <th>Modalidade</th>
                <th>Categoria</th>
                <th>
                  <div className="th-frequency">
                    <p>Frequência</p>
                    <small>(Dias por semana)</small>
                  </div>
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
                  <Select
                    options={[
                      { id: 1, label: 'Infantil' },
                      { id: 2, label: 'Adulto' },
                    ]}
                    onSelect={setOptionSelected}
                    value={optionSelected}
                    placeholder="Selecione"
                  />
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
              <tr>
                <td>
                  <Checkbox checked={true} />
                </td>
                <td>
                  <p>
                    No GI <small>(sem kimono)</small>
                  </p>
                </td>
                <td>
                  <p className="category">Adulto</p>
                </td>
                <td>
                  <div className="frequency">
                    <div>2</div>
                  </div>
                </td>
                <td>
                  <p>
                    <b>R$</b> 80,00
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox checked={false} />
                </td>
                <td>
                  <p>Musculação</p>
                </td>
                <td>
                  <p className="category">Todas as idades</p>
                </td>
                <td>
                  <div className="frequency">
                    <div>3</div>
                    <Switch checked={false} />
                    <div>5</div>
                  </div>
                </td>
                <td>
                  <p>
                    <b>R$</b> 70,00
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CustomPlan />
      </div>
    </Container>
  );
};

export default PlansAndPrices;
