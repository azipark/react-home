import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px 20px;
  background-color: var(--primary);

  h2,
  strong,
  p {
    color: var(--white);
  }

  h2 {
    padding-bottom: 15px;
  }

  p {
    padding-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--white);

  h3,
  h4,
  strong,
  p {
    color: var(--primary);
  }

  h4 {
    margin-bottom: 10px;
  }
  
  p {
    color: var(--gray100);
  }

  a {
    display: block;
    color: var(--primary);
  }
`;

function Projects({ onProjectClick }) {
  
  const projects = [
    { id: 1, title: 'OK비교대출', period: '2024.02 ~', subtitle: 'OK비교대출 앱, 웹앱 운영 및 유지/보수', link: 'https://m.okbigyo.com/' },
    { id: 2, title: 'OK비교대출', period: '2024.02 ~', subtitle: 'OK비교대출 웹 운영 및 유지/보수', link: 'https://www.okbigyo.com/' },
    { id: 3, title: 'OKpay', period: '2023.09 ~', subtitle: 'OKpay 앱, 웹 운영 및 유지/보수', link: 'https://m.okaypay.co.kr/matcs/land.do' },
    { id: 4, title: '한화생명보험 X Need', period: '2023.06', subtitle: 'Description3', link: 'https://hanwha-need.com/signature/' },
    { id: 5, title: 'Project 4', period: '2021.06 ~ 2023.04', subtitle: 'Description4', link: 'https://sea.sealm.com' },
    { id: 6, title: 'Project 5', period: '2021.06 ~ 2023.04', subtitle: 'Description5', link: 'https://www.rohan.co.kr/' },
    { id: 7, title: 'Project 6', period: '2021.06 ~ 2023.04', subtitle: 'Description5', link: 'https://www.sealm.co.kr/' },
    { id: 8, title: 'Project 7', period: '2022.08', subtitle: 'Description5', link: 'https://www.rohan.co.kr/event/event_20220810/index.html' },
    { id: 9, title: 'Project 8', period: '2022.06', subtitle: 'Description5', link: 'https://www.rohan.co.kr/event/event_20220615/index.html' }
  ];

  return (
    <>
      <ProjectWrap>
        <div className="inner">
          <h2>P R O J E C T S</h2>
          <strong>그동안의 작업물을 최신순으로 작성했습니다.</strong>
          <p>(대부분의 작업을 보안 등의 문제로 첨부하지 못했습니다. 참고 부탁드립니다.)</p>
          <GridContainer>
            {projects.map((project,index) => (
              <ProjectCard key={index}>
                <h3>{project.title}</h3>
                <h4>{project.period}</h4>
                <strong>{project.subtitle}</strong>
                <button onClick={() => onProjectClick(project.content)}></button>
              </ProjectCard>
            ))}
          </GridContainer>
        </div>
      </ProjectWrap>
    </>
  );
}

export default Projects;