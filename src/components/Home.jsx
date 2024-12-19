import React from 'react';
import styled from 'styled-components';

const HomeWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  color: var(--white);
  background-color: var(--primary);

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .main-text {
    overflow: clip;
    position: relative;
    font-size: 10vw;
    font-weight: 900;
    color: var(--white);
    background-clip: text;
    background-color: var(--white);

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 40%;
      top: 18%;
      left: 50%;
      aspect-ratio: 1;
      translate: -50% 0;
      border-top-left-radius: 60% 80%;
      border-top-right-radius: 50% 80%;
      border-bottom-left-radius: 60% 80%;
      border-bottom-right-radius: 50% 80%;
      animation: rot 10s linear infinite;
      mix-blend-mode: screen;
      background-color: var(--green);
    }

    &:after {
      animation-delay: -4s;
      animation-duration: 8s;
    }
  }

  @keyframes rot {
    to {
      rotate: 360deg;
    }
  }
`;

const FooterWrap = styled.footer `
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 8vh;
  color: var(--white);
  /* background: transparent; */

  h2 {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0;
  }
`;

function Home() {
  return (
    <>
      <HomeWrap>
        <div className="d-flex align-center justify-center">
          <h1 className="main-text">hello</h1>
        </div>
        <FooterWrap>
          <h2>copyright hyeyeon</h2>
        </FooterWrap>
      </HomeWrap>
    </>
  );
}

export default Home;