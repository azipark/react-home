import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  z-index: 7721;
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  padding: 0 20px;
  box-shadow: ${(props) => (props.isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none')};
  color: var(--white);
  background: ${(props) => (props.isScrolled ? '#212529' : 'transparent')};
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

const NavLink = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  font-size: 10px;
  font-weight: 400;
  color: var(--white);

  + a {
    margin-left: 24px;
  }

  &:hover {
    cursor: pointer;

    .underline {
      left: 0;
    }
  }

  .underline {
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: -90px;
    margin-top: 15px;
    transition: all .3s ease-in;
    background-color: var(--red);
  }
`;

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrap isScrolled={isScrolled}>
      <Navbar>
        <NavLink href="/"><span className="underline"></span>H O M E</NavLink>
        <NavLink href="/about"><span className="underline"></span>A B O U T</NavLink>
        <NavLink href="/projects"><span className="underline"></span>P R O J E C T S</NavLink>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;