import React from 'react';
import Header from './header';
import HeaderMobile from './headerMobile';
import useWindowSize from 'helpers/customHooks/useWindowSize';

const HeaderIndex: React.FC = () => {
  const { isMobile } = useWindowSize();

  return isMobile ? <HeaderMobile /> : <Header />;
};

export default HeaderIndex;
