import React, { useContext } from 'react';
import { Container } from './styles';
import DesktopSchedule from './desktopSchedule';
import GlobalContext from 'context/globalContext/globalContext';
import MobileSchedule from './mobileSchedule';
import useSchedule from './useSchedule';

const Schedule: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  const isMobile = windowSize.width < 700;

  const { classes } = useSchedule();

  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">Modalidades e horários</h1>
        {isMobile ? (
          <MobileSchedule classes={classes} />
        ) : (
          <DesktopSchedule classes={classes} />
        )}
      </div>
    </Container>
  );
};

export default Schedule;
