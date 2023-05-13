import React, { useState } from 'react';
import { Container } from './styles';
import { ChevronLeft, ChevronRight } from 'ts-react-feather-icons';
import Card from '../card/card';
import { type Color } from '../card/types';

const MobileSchedule: React.FC = () => {
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

  const categories: Record<number, { name: string; color: Color }> = {
    1: {
      name: 'adulto',
      color: 'blue',
    },
    2: {
      name: 'infantil',
      color: 'yellow',
    },
    3: {
      name: 'feminino',
      color: 'pink',
    },
    4: {
      name: 'treino livre',
      color: 'black',
    },
    5: {
      name: 'adulto',
      color: 'gray',
    },
  };

  const mockedSchedule = {
    '6:00': [
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 1,
      },
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 2,
      },
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 3,
      },
    ],
    '9:00': [
      {
        modality: 'jiu jitsu',
        category: 3,
        day: 5,
      },
    ],
    '10:00': [
      {
        modality: 'jiu jitsu',
        category: 4,
        day: 5,
      },
    ],
    '10:30': [
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 1,
      },
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 3,
      },
    ],
    '19:30': [
      {
        modality: 'jiu jitsu',
        category: 2,
        day: 0,
      },
      {
        modality: 'jiu jitsu',
        category: 2,
        day: 2,
      },
      {
        modality: 'jiu jitsu',
        category: 2,
        day: 4,
      },
    ],
    '20:30': [
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 0,
      },
      {
        modality: 'NO GI',
        category: 5,
        day: 0,
      },
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 2,
      },
      {
        modality: 'NO GI',
        category: 5,
        day: 0,
      },
      {
        modality: 'jiu jitsu',
        category: 1,
        day: 4,
      },
    ],
  };

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
        {Object.entries(mockedSchedule).map(([time, value]) => {
          const data = value.find((elem) => elem.day === day);

          if (data == null) return null;

          return (
            <Card
              key={`schedule-card=${time}`}
              time={time}
              modality={data.modality}
              category={categories[data.category].name}
              color={categories[data.category].color}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default MobileSchedule;
