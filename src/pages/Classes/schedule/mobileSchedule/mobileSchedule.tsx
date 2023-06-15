import React, { useState } from 'react';
import { Container } from './styles';
import { ChevronLeft, ChevronRight } from 'ts-react-feather-icons';
import Card from '../card/card';
import { type Schedule } from '../types';

interface IProps {
  classes: Schedule;
}

const MobileSchedule: React.FC<IProps> = (props) => {
  const { classes } = props;

  const daysOfWeek = {
    0: 'Segunda',
    1: 'Terça',
    2: 'Quarta',
    3: 'Quinta',
    4: 'Sexta',
    5: 'Sábado',
  };

  type DayOfWeek = keyof typeof daysOfWeek;

  const [day, setDay] = useState<DayOfWeek>(0);

  const previousDay: DayOfWeek = day === 0 ? 5 : ((day - 1) as DayOfWeek);
  const nextDay: DayOfWeek = day === 5 ? 0 : ((day + 1) as DayOfWeek);

  return (
    <Container>
      <div className="week-day-selection">
        <button
          className="prev"
          onClick={() => {
            setDay(previousDay);
          }}
        >
          <ChevronLeft />
        </button>
        <button
          className="day"
          onClick={() => {
            setDay(previousDay);
          }}
        >
          {daysOfWeek[previousDay]}
        </button>
        <button className="day selected">{daysOfWeek[day]}</button>
        <button
          className="day"
          onClick={() => {
            setDay(nextDay);
          }}
        >
          {daysOfWeek[nextDay]}
        </button>
        <button
          className="next"
          onClick={() => {
            setDay(nextDay);
          }}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="card-container">
        {Object.entries(classes)
          .sort((a, b) => (a[0] < b[0] ? -1 : 1))
          .map(([time, value]) => {
            const data = value.find(
              (elem) =>
                elem.day.toLowerCase() === daysOfWeek[day].toLowerCase(),
            );

            if (data == null) return null;

            return (
              <Card
                key={`schedule-card=${time}`}
                time={time}
                modality={data.modality}
                category={data.category}
                color={data.color}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default MobileSchedule;
