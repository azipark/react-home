import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

const ProjectWrap = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: var(--white);
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: var(--white);
  background: url('src/assets/bg_1.jpg') center center no-repeat fixed;
  background-size: cover;
`;

const BannerText = styled.div`
  position: fixed;
  width: auto;
  top: 20%;
  left: 50%;
  padding: 20px;
  border: .5em solid var(--white);
  transform: translateX(-50%);
`;

const Content = styled.div`
  position: relative;
  margin: 120px auto;
`;

function Projects() {
  return(
    <>
      <ProjectWrap>
        <Banner id="banner">
          <BannerText id="bannerText">
            <h2>P r o j e c t s</h2>
          </BannerText>
        </Banner>
        <Content id="content">
          <div className="inner">
            <h2><span className="point">Skillset</span></h2>
          </div>
        </Content>
      </ProjectWrap>
    </>
  )
}

export default Projects;