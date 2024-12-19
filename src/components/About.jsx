import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

// About
const AboutWrap = styled.div`
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
  background: url('src/assets/bg_3.jpg') center center no-repeat fixed;
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

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: var(--primary);
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    width: 100%;
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid var(--gray200);
      border-radius: 8px;
      transition: all .1s ease-out;

      @media (max-width: 768px) {
        width: 38px;
        height: 38px;
      }

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }

      + li {
        margin-left: 14px;

        @media (max-width: 768px) {
          margin-left: 6px
        }
      }

      img {
        display: block;
        width: 38px;
        height: auto;

        @media (max-width: 768px) {
          width: 100%;
          max-width: 20px;
        }
      }
    }
  }
`;

// Timeline
const TimeWrap = styled.section`
  position: relative; 
  height: 1578px;
  padding: 120px 0;
  background-color: var(--gray300);

  @media (max-width: 768px) {
    height: 2000px;
  }

  h2 {
    position: relative;
    padding-bottom: 15px;
    text-align: center;
  }

  ul {
    &.list-time {
      position: absolute;
      width: 8px;
      height: 1300px;
      margin: 20px auto 0 auto;
      padding: 50px 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 24px;
      background-color: var(--gray200);

      @media (max-width: 1024px) {
        height: 1800px;
      }

      > li {
        position: relative;
        height: 200px;
        
        @media (max-width: 1024px) {
          height: 300px;
        }

        &::before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
          background-color: var(--primary);
        }

        .box-time {
          position: absolute;
          width: 40vw;
          min-width: 120px;
          max-width: 400px;
          margin-left: 20px;
          left: 0;
          box-sizing: border-box;
          border-radius: 10px;
          color: var(--primary);

          p,
          ul {
            display: block;
            padding-top: 8px;
            font-size: 14px;
            line-height: 1.6;
          }
        }

        .txt-period {
          position: absolute;
          left: 0;
          margin-left: -100px;
        }
      }
    }
  }
`;

function About() {
  return(
  <>
    <AboutWrap>
      <Banner id="banner">
        <BannerText id="bannerText">
          <h2>A b o u t</h2>
        </BannerText>
      </Banner>
      <Content id="content">
        <div className="inner">
          <h2><span className="point">Skill set</span></h2>
          <ul>
            <li><img src="src/assets/img_html.png" alt="HTML5" /></li>
            <li><img src="src/assets/img_css.png" alt="CSS3" /></li>
            <li><img src="src/assets/img_sass.png" alt="SASS" /></li>
            <li><img src="src/assets/img_js.png" alt="Javascript" /></li>
            <li><img src="src/assets/img_vue.png" alt="VueJS" /></li>
            <li><img src="src/assets/img_react.png" alt="React" /></li>
            <li><img src="src/assets/img_gsap.png" alt="GSAP" /></li>
            <li><img src="src/assets/img_bootstrap.png" alt="Bootstrap" /></li>
          </ul>

          <h2><span className="point">Tools</span> I use</h2>
          <ul>
            <li><img src="src/assets/img_macos.png" alt="macOS" /></li>
            <li><img src="src/assets/img_vscode.png" alt="VSCODE" /></li>
            <li><img src="src/assets/img_ps.png" alt="Adobe Photoshop" /></li>
            <li><img src="src/assets/img_xd.png" alt="Adobe XD" /></li>
            <li><img src="src/assets/img_figma.png" alt="Figma" /></li>
            <li><img src="src/assets/img_sketch.png" alt="Sketch" /></li>
            <li><img src="src/assets/img_zeplin.png" alt="Zeplin" /></li>
          </ul>
        </div>
      </Content>
    </AboutWrap>
    <TimeWrap>
      <div className="inner">
        <h2>Careers</h2>
        <ul className='list-time'>
          <li>
            <strong className='txt-period'>2018.07<br/>~ 2018.10</strong>
            <motion.div
              className='box-time'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.2}}
              variants={fadeInVariants}
            >
              <h4>(주)넥슨코리아</h4>
              <p>FIFA ONLINE4 / 팀원(단기계약직)</p>
            </motion.div>
          </li>
          <li>
            <strong className='txt-period'>2019.02<br/>~ 2020.03</strong>
            <motion.div
              className='box-time'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              variants={fadeInVariants}
            >
              <h4>주식회사 씨티티디</h4>
              <p>퍼블리싱팀 / 팀원(정규직)</p>
            </motion.div>
          </li>
          <li>
            <strong className='txt-period'>2020.11<br/>~ 2021.02</strong>
            <motion.div
              className='box-time'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              variants={fadeInVariants}
            >
              <h4>주식회사디케이테크인</h4>
              <p>FT개발1팀 / 팀원(정규직)</p>
            </motion.div>
          </li>
          <li>
            <strong className='txt-period'>2021.06<br/>~ 2023.04</strong>
            <motion.div
              className='box-time'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              variants={fadeInVariants}
            >
              <h4>(주)플레이위드코리아</h4>
              <p>기술지원실 서비스개발팀 / 연구원(정규직)</p>
            </motion.div>
          </li>
          <li>
            <strong className='txt-period'>2023.04<br/>~ 2023.08</strong>
            <motion.div
              className='box-time'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              variants={fadeInVariants}
            >
              <h4>원유니버스</h4>
              <p>프리랜서</p>
            </motion.div>
          </li>
          <li>
            <strong className='txt-period'>2023.09<br/>~ 재직중</strong>
            <motion.div
              className='box-time'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              variants={fadeInVariants}
            >
              <h4>(주)오케이금융그룹</h4>
              <ul>
                <li><em>오케이인베스트먼트파트너스</em> 플랫폼개발팀 / 팀원(정규직)</li>
                <li><em>오케이저축은행</em> UX.UI팀 / 팀원(정규직)</li>
                <li><em>오케이데이터시스템</em> 디지털채널2팀 / 팀원(정규직)</li>
              </ul>
            </motion.div>
          </li>
        </ul>
      </div>
    </TimeWrap>
  </>
  );
}

export default About;