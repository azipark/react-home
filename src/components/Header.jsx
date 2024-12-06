import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 0 40px;
  top: 0;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Navlink = styled.a`
  display: block;
`;

function Header() {
  return (
    <HeaderWrap>
      <Navbar>
        <Navlink href="#">1</Navlink>
        <Navlink href="#">1</Navlink>
        <Navlink href="#">1</Navlink>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;