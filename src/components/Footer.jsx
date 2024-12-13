import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  position: relative;
  width: 100%;
  height: 200px;
  color: var(--white);
  background-color: var(--gray300);

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

function Home() {
  return (
    <>
      <FooterWrap>
        <div className="d-flex align-center justify-center">
          sdfsdfsdf
        </div>
      </FooterWrap>
    </>
  );
}

export default Home;