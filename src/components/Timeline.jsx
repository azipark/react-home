import React, { useRef } from 'react';
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

const TimeWrap = styled.section`
  position: relative;
  height: 100%;
  padding: 100px 0;
  background-color: var(--gray300);

  h2 {
    padding-bottom: 15px;
  }
  strong {
    padding-bottom: 40px;
  }

  ul {
    position: relative;
    width: 8px;
    height: 100%;
    margin: 40px auto 0 auto;
    padding: 50px 0;
    border-radius: 10px;
    background-color: var(--white);

    li {
      position: relative;
      height: 300px;

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

      &:nth-child(2n) {
        .box {
          left: 0;
          margin-left: 20px;
        }
      }

      &:nth-child(2n-1) {
        .box {
          right: 0;
          margin-right: 20px;
        }
      }

      .box {
        position: absolute;
        width: 100px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 10px;
        color: var(--primary);
        border: 1px solid var(--primary);
      }
    }
  }
`;

function Timeline() {
  return (
    <>
      <TimeWrap>
        <div className="inner">
          <h2>C A R E E R S</h2>
          <strong>그동안의 여정을 시간순으로 작성했습니다.</strong>
          <ul>
            <motion.li
              className='time-motion'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              variants={fadeInVariants}
            >
              <div className="box">
                <strong>
                  1
                </strong>
              </div>
            </motion.li>
            <motion.li
              className='time-motion'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.4}}
              variants={fadeInVariants}
            >
              <div className="box">
                <strong>
                  2
                </strong>
              </div>
            </motion.li>
            <motion.li
              className='time-motion'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              variants={fadeInVariants}
            >
              <div className="box">
                <strong>
                  3
                </strong>
              </div>
            </motion.li>
            <motion.li
              className='time-motion'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              variants={fadeInVariants}
            >
              <div className="box">
                <strong>
                  3
                </strong>
              </div>
            </motion.li>
          </ul>
        </div>
      </TimeWrap>
    </>
  )
}

export default Timeline;