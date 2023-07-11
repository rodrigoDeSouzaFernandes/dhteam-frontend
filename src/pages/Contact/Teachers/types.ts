import { type BeltColor } from 'components/teamMemberCard/types';
import { type Image } from 'types/global.types';

interface Belt {
  data: {
    id: number;
    attributes: {
      color: BeltColor;
    };
  };
}

interface TeamMember {
  attributes: {
    firstName: string;
    lastName: string;
    birthDate: string;
    profile: Image;
    belt: Belt;
    beltRank: number;
    achievements: string;
    nickname: string;
    instagram: string;
    facebook: string;
    whatsapp: string;
    phone: string;
    youtube: string;
  };
  id: number;
}

export interface IuseTeacher {
  teamMembers: TeamMember[];
}
