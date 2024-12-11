import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Kelly from './components/Kelly';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const kellyRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      kelly: kellyRef,
      projects: projectRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header scrollToSection={scrollToSection} />
            <GlobalStyle/>
            <div ref={kellyRef} id='kelly'>
              <Kelly />
            </div>
            <div ref={projectRef} id='projects'>
              <Projects />
            </div>
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;