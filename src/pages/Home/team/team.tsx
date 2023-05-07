import React, { useContext, useMemo } from 'react';
import { Container } from './styles';
import TeamMemberCard from 'components/teamMemberCard/teamMemberCard';
import { Carousel } from 'react-responsive-carousel';
import GlobalContext from 'context/globalContext/globalContext';

const Team: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  const showCarousel = useMemo(() => windowSize.width < 800, [windowSize]);

  const cardsToShow = useMemo(
    () => (windowSize.width < 1100 ? 2 : windowSize.width < 1450 ? 3 : 4),
    [windowSize],
  );

  const cardSize = useMemo(
    () => (windowSize.width < 400 ? 'small' : 'large'),
    [windowSize],
  );

  interface TeamMember {
    name: string;
    belt: 'white' | 'blue' | 'purple' | 'brown' | 'black';
  }

  const mockTeamMembers: TeamMember[] = [
    {
      name: 'Pedro Luiz Galvão',
      belt: 'black',
    },
    {
      name: 'Marcos Andrade Almeida',
      belt: 'brown',
    },
    {
      name: 'Pedro Henrique Almeida Costa',
      belt: 'purple',
    },
    {
      name: 'Gabriel Oliveira Santos',
      belt: 'blue',
    },
    {
      name: 'Rafael Ferreira Lima',
      belt: 'white',
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="title">NOSSA EQUIPE</h1>
        <p className="subtitle">
          Nossa equipe é composta por professores qualificados e experientes,
          comprometidos em fornecer a melhor educação possível.
        </p>
      </div>

      <div className="members">
        {showCarousel ? (
          <Carousel
            emulateTouch={false}
            infiniteLoop={false}
            autoPlay={false}
            interval={5000}
            showThumbs={false}
            showIndicators={true}
            centerSlidePercentage={100}
            centerMode={true}
            swipeScrollTolerance={50}
            showArrows={false}
          >
            {mockTeamMembers.map((member, index) => (
              <TeamMemberCard
                key={`team-member-${index}`}
                className="team-member-card"
                beltColor={member.belt}
                name={member.name}
                size={cardSize}
              />
            ))}
          </Carousel>
        ) : (
          <>
            {mockTeamMembers
              .filter((_member, index) => index < cardsToShow)
              .map((member, index) => (
                <TeamMemberCard
                  key={`team-member-${index}`}
                  className="team-member-card"
                  beltColor={member.belt}
                  name={member.name}
                  size="large"
                />
              ))}
          </>
        )}
      </div>
    </Container>
  );
};

export default Team;
