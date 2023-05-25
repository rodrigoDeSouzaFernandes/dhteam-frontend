import React, { useCallback, useState } from 'react';
import { MobileHeaderContainer, MobileMenu, NavItem } from './styles';
import { menuIcon, localIcon, xIcon } from 'assets/icons';
import Icon from 'components/icon';
import { useLocation } from 'react-router-dom';

const HeaderMobile: React.FC = () => {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toogleMobileMenu = useCallback((): void => {
    setMobileMenuOpen((prev) => !prev);
  }, [setMobileMenuOpen]);

  return (
    <>
      <MobileHeaderContainer>
        <a
          className="address"
          href="https://www.google.com/maps/dir//Av.+Nova+York,+1670+-+2%C2%BA+Andar+-+Capelinha,+Betim+-+MG,+32678-620/@-19.9314647,-44.1683182,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa6eb1eed11eca9:0xc4a6be72ee33344f!2m2!1d-44.0982778!2d-19.9314784"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={localIcon}
            alt="ícone que representa localização"
            className="local-icon"
          />
          <p>Av. Nova York, 1670 - 2º Andar - Capelinha, Betim - MG</p>
        </a>
        <Icon src={menuIcon} alt={'ícone de menu'} onClick={toogleMobileMenu} />
      </MobileHeaderContainer>

      {mobileMenuOpen && (
        <MobileMenu>
          <Icon
            src={xIcon}
            alt={'ícone de fechar o menu'}
            className="close-icon"
            size={30}
            onClick={toogleMobileMenu}
          />

          <NavItem disabled={pathname === '/'} to="/">
            DH TEAM
          </NavItem>
          <NavItem disabled={pathname === '/aulas'} to="/aulas">
            AULAS
          </NavItem>
          <NavItem disabled={pathname === '/o-jiu-jitsu'} to="/o-jiu-jitsu">
            O JIU-JITSU
          </NavItem>
          {/* <NavItem disabled={false} to="#">
              Blog
            </NavItem> */}
          <NavItem disabled={pathname === '/contato'} to="/contato">
            CONTATO
          </NavItem>
          <NavItem disabled={pathname === '/faq'} to="/faq">
            FAQ
          </NavItem>
        </MobileMenu>
      )}
    </>
  );
};

export default HeaderMobile;
