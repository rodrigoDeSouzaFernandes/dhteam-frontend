import React from 'react';
import { Container } from './styles';
import Card from '../card/card';
import { type Schedule } from '../types';

interface IProps {
  classes: Schedule;
}

const DesktopSchedule: React.FC<IProps> = (props) => {
  const { classes } = props;

  const daysOfWeek = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ];

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
          {Object.entries(classes)
            .sort((a, b) => (a[0] < b[0] ? -1 : 1))
            .map(([key, value]) => {
              const line = Array(6).fill(null);

              value.forEach((elem) => {
                const dayIndex = daysOfWeek.indexOf(elem.day);
                line[dayIndex] = elem;
              });

              return (
                <tr key={`class-table-line=${key}`}>
                  {line.map((item, index) => {
                    if (item !== null) {
                      return (
                        <td
                          key={`item-${key}-${String(item.modality)}-${String(
                            item.category,
                          )}-${index}`}
                        >
                          <Card
                            time={key}
                            modality={item.modality}
                            category={item.category}
                            color={item.color}
                          />
                        </td>
                      );
                    } else {
                      return <td key={`item-empty-${index}`}></td>;
                    }
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};

export default DesktopSchedule;
