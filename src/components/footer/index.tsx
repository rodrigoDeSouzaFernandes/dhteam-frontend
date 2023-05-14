import React, { useContext } from 'react';
import Footer from './footer';
import GlobalContext from 'context/globalContext/globalContext';
import MobileFooter from './footerMobile';

const FooterIndex: React.FC = () => {
  const { windowSize } = useContext(GlobalContext);

  const isMobile = windowSize.width < 600;

  return isMobile ? <MobileFooter /> : <Footer />;
};

export default FooterIndex;
