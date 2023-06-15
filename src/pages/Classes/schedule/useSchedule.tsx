import { useEffect, useState } from 'react';
import { type Schedule, type Class, type IuseSchedule } from './types';
import { Api } from 'services/api';

const useSchedule = (): IuseSchedule => {
  const [classes, setClasses] = useState<Schedule>({});

  const formatData = (classes: Class[]): Schedule => {
    return classes.reduce((acc: Record<string, any[]>, curr) => {
      const time = new Date(
        `2000-01-01T${String(curr.attributes.time)}`,
      ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const obj = {
        ...curr.attributes,
      };

      if (time in acc) {
        acc[time].push(obj);
      } else {
        acc[time] = [obj];
      }

      return acc;
    }, {});
  };

  const getClasses = (): void => {
    Api.get('/classes')
      .then((response) => {
        setClasses(formatData(response.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClasses();
  }, []);

  return { classes };
};

export default useSchedule;
