import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    function subpageParallax() {
      const scrollPos = window.scrollY;

      const banner = document.getElementById('banner');
      if (banner) {
        banner.style.backgroundPosition = `50% ${-scrollPos / 2}px`;
      }

      const bannerText = document.getElementById('bannerText');
      if (bannerText) {
        bannerText.style.marginTop = `{scrollPos / 4}px`;
        bannerText.style.opacity = 1 - scrollPos / 240;
      }
    }

    window.addEventListener('scroll', subpageParallax);
    
    return () => {
      window.removeEventListener('scroll', subpageParallax);
    };
  }, []);

  return (
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
