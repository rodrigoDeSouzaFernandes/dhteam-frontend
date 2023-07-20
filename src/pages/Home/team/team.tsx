import React, { useContext, useMemo } from 'react';
import { Container } from './styles';
import TeamMemberCard from 'components/teamMemberCard/teamMemberCard';
import { Carousel } from 'react-responsive-carousel';
import GlobalContext from 'context/globalContext/globalContext';
import logo from 'assets/logo/logo.svg';
import useTeam from './useTeam';

const Team: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  const showCarousel = useMemo(() => windowSize.width < 800, [windowSize]);

  const cardSize = useMemo(
    () => (windowSize.width < 400 ? 'small' : 'large'),
    [windowSize],
  );

  const cardSizeOutCarousel = useMemo(
    () => (windowSize.width < 1450 ? 'small' : 'large'),
    [windowSize],
  );

  const { teamMembers } = useTeam();

  return (
    <Container backgroundImage={logo} id="equipe">
      <div>
        <h1 className="title">NOSSA EQUIPE</h1>
        <p className="subtitle">
          Nossa equipe é composta por professores altamente qualificados e
          experientes, que estão comprometidos em oferecer uma educação de
          excelência. Valorizamos a diversidade de habilidades e experiências de
          cada membro, o que nos permite fornecer uma abordagem abrangente e
          enriquecedora para nossos alunos.
        </p>
        <p className="subtitle">
          Acreditamos no poder transformador do Jiu-Jitsu e nos esforçamos para
          transmitir não apenas as habilidades técnicas, mas também os valores
          do esporte aos nossos alunos.
        </p>
      </div>

      <div className="members">
        {showCarousel ? (
          <Carousel
            emulateTouch={false}
            infiniteLoop={true}
            autoPlay={false}
            interval={5000}
            showThumbs={false}
            showIndicators={true}
            centerSlidePercentage={100}
            centerMode={true}
            swipeScrollTolerance={50}
            showArrows={false}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={`team-member-${index}`}
                className="team-member-card"
                beltColor={member.attributes.belt.data.attributes.color}
                name={member.attributes.firstName}
                lastName={member.attributes.lastName}
                size={cardSize}
                photo={member.attributes.profile.data.attributes.url}
                birthDate={member.attributes.birthDate}
                beltRank={member.attributes.beltRank}
                achievements={member.attributes.achievements}
                phone={member.attributes.phone}
                instagram={member.attributes.instagram}
                facebook={member.attributes.facebook}
                whatsapp={member.attributes.whatsapp}
                youtube={member.attributes.youtube}
              />
            ))}
          </Carousel>
        ) : (
          <>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={`team-member-${index}`}
                className="team-member-card"
                beltColor={member.attributes.belt.data.attributes.color}
                name={member.attributes.firstName}
                lastName={member.attributes.lastName}
                size={cardSizeOutCarousel}
                photo={member.attributes.profile.data.attributes.url}
                birthDate={member.attributes.birthDate}
                beltRank={member.attributes.beltRank}
                achievements={member.attributes.achievements}
                phone={member.attributes.phone}
                instagram={member.attributes.instagram}
                facebook={member.attributes.facebook}
                whatsapp={member.attributes.whatsapp}
                youtube={member.attributes.youtube}
                nickname={member.attributes.nickname}
              />
            ))}
          </>
        )}
      </div>
    </Container>
  );
};

export default Team;
