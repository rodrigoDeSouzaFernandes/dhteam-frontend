import React from 'react';
import { Container } from './styles';
// import { TeamMemberCard } from 'components';
// import GlobalContext from 'context/globalContext/globalContext';

const Teachers: React.FC = () => {
  // const { windowSize } = useContext(GlobalContext);
  // const cardSize = windowSize.width > 1020 ? 'large' : 'small';

  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">
          Fale diretamente com o professor de sua preferência
        </h1>
        <p className="subtitle">
          Escolha o professor com quem mais se identifica e entre em contato
          agora mesmo!
        </p>
        <div className="cards-container">
          {/* <TeamMemberCard name="Douglas" beltColor="black" size={cardSize} />
          <TeamMemberCard name="Aline" beltColor="black" size={cardSize} />
          <TeamMemberCard name="Rodrigão" beltColor="brown" size={cardSize} /> */}
        </div>
      </div>
    </Container>
  );
};

export default Teachers;
