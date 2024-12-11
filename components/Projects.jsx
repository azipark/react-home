import React from 'react';
import styled from 'styled-components';

const ProjectWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--primary);

  > div {
    position: relative;
    height: 100vh;
    margin: 0 auto;
    padding: 40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background: var(--white);

  h3 {
    margin-bottom: 10px;
    color: var(--primary);
  }
  h4 {
    color: var(--primary);
  }
  
  p {
    font-size: 1rem;
    color: var(--gray100);
  }
`;

function Projects() {

  const projects = [
    { id: 1, title: 'Project 11111111111111111', period: '', description: 'Description1', link: '#' },
    { id: 2, title: 'Project 2', period: '', description: 'Description2', link: '#' },
    { id: 3, title: 'Project 3', period: '', description: 'Description3', link: '#' },
    { id: 4, title: 'Project 4', period: '', description: 'Description4', link: '#' },
    { id: 5, title: 'Project 5', period: '', description: 'Description5', link: '#' }
  ];

  return (
    <>
      <ProjectWrap>
        <div className="d-flex align-center justify-center">
          <GridContainer>
            {projects.map((project, index) => (
              <ProjectCard key={index} href={project.link}>
                <h3>{project.title}</h3>
                <h4>{project.period}</h4>
                <p>{project.description}</p>
              </ProjectCard>
            ))}
          </GridContainer>
        </div>
      </ProjectWrap>
    </>
  );
}

export default Projects;