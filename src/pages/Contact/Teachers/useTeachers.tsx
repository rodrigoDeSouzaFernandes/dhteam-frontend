import { useEffect, useState } from 'react';
import { type IuseTeacher } from './types';
import { Api } from 'services/api';

const useTeachers = (): IuseTeacher => {
  const [teamMembers, setTeamMembers] = useState([]);

  const getTeamMembers = (): void => {
    Api.get('/team-members?populate=*')
      .then((response) => {
        setTeamMembers(response.data.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  return { teamMembers };
};

export default useTeachers;
