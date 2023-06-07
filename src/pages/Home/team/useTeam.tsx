import { useEffect, useState } from 'react';
import { type IuseTeam } from './types';
import { Api } from 'services/api';

const useTeam = (): IuseTeam => {
  const [teamMembers, setTeamMembers] = useState([]);

  console.log(teamMembers);

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

export default useTeam;
