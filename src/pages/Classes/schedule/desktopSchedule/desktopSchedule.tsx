import React from 'react';
import { Container } from './styles';
import Card from '../card/card';

const DesktopSchedule: React.FC = () => {
  return (
    <Container>
      <table className="schedule">
        <thead>
          <tr>
            <th>Segunda</th>
            <th>terça</th>
            <th>quarta</th>
            <th>quinta</th>
            <th>sexta</th>
            <th>sábado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <Card
                time={'6:00'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td>
              <Card
                time={'6:00'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td>
              <Card
                time={'6:00'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Card
                time={'9:00'}
                modality="jiu jitsu"
                category="treino feminino"
                color="pink"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Card
                time={'10:00'}
                modality="jiu jitsu"
                category="treino livre"
                color="black"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Card
                time={'10:30'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td></td>
            <td>
              <Card
                time={'10:30'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Card
                time={'19:00'}
                modality="jiu jitsu"
                category="infantil"
                color="yellow"
              />
            </td>
            <td></td>
            <td>
              <Card
                time={'19:00'}
                modality="jiu jitsu"
                category="infantil"
                color="yellow"
              />
            </td>
            <td></td>
            <td>
              <Card
                time={'19:00'}
                modality="jiu jitsu"
                category="infantil"
                color="yellow"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Card
                time={'20:30'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td>
              <Card
                time={'20:30'}
                modality="NO GI"
                category="adulto"
                color="gray"
              />
            </td>
            <td>
              <Card
                time={'20:30'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td>
              <Card
                time={'20:30'}
                modality="NO GI"
                category="adulto"
                color="gray"
              />
            </td>
            <td>
              <Card
                time={'20:30'}
                modality="jiu jitsu"
                category="adulto"
                color="blue"
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default DesktopSchedule;
