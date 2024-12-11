import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  z-index: 7721;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  padding: 0 40px;
  transition: all 0.5s ease-in;
  color: var(--white);
  background: transparent;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
`;

const NavLink = styled.button`
  display: block;
  color: var(--white);
  transition: color 0.3s ease;
`;

function Header({ scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <HeaderWrap isVisible={isVisible}>
      <Navbar>
        <NavLink onClick={() => scrollToSection('kelly')}>1</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>1</NavLink>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;