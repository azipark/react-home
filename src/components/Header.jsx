import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  z-index: 7721;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  padding: 0 20px;
  transition: all 0.5s ease-in;
  color: var(--white);
  background: var(--primary);
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

const NavLink = styled.button`
  display: block;
  color: var(--white);
  transition: color 0.3s ease;

  + button {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
        <NavLink onClick={() => scrollToSection('Home')}>HOME</NavLink>
        <NavLink onClick={() => scrollToSection('timeline')}>TIMELINE</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>PROJECTS</NavLink>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;