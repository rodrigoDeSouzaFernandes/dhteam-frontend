import React, { useContext } from 'react';
import Header from './header';
import HeaderMobile from './headerMobile';
import GlobalContext from 'context/globalContext/globalContext';

const HeaderIndex: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  return windowSize.isMobile ? <HeaderMobile /> : <Header />;
};

export default HeaderIndex;
