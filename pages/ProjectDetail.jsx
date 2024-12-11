import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { projects } from './components/Projects';

function ProjectDetail() {
  const { id } = useParams(); // URL 파라미터로 ID를 가져옴
  const navigate = useNavigate();
  const project = projects.find((proj) => proj.id === parseInt(id)); // 프로젝트 데이터 찾기

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{project.title}</h1>
      <p>{project.details}</p>
      <button onClick={() => navigate(-1)}>Go Back</button> {/* 이전 페이지로 이동 */}
    </div>
  );
}

export default ProjectDetail;