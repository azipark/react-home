import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';

import Header from './components/Header';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';

function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    }
  },
};

function App() {
  const HomeRef = useRef(null);
  const timeRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      Home: HomeRef,
      timeline : timeRef,
      projects: projectRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // const [popupContent, setPopupContent] = useState(null);
  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  // const showPopup = (content) => {
  //   setPopupContent(content);
  //   setIsPopupVisible(true);
  // }

  // const hidePopup = () => {
  //   setPopupContent(null);
  //   setIsPopupVisible(false);
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header scrollToSection={scrollToSection} />
            <GlobalStyle/>
            <div ref={HomeRef} id='Home'>
              <Home />
            </div>
            <div ref={timeRef} id='timeline'>
              <Timeline />
            </div>
            <div ref={projectRef} id='projects'>
              <motion.div
                variants={pageVariants}
                initial='initial'
                animate='animate'
                exit='exit'
              >
                <Projects /> {/*  onProjectClick={showPopup} */}
              </motion.div>
            </div>
            <Footer />
          </>
          
          }
        />
      </Routes>
      {/* Popup Component */}
      {/* {isPopupVisible && (
        <div className="popup-overlay" onClick={hidePopup}>
          <motion.div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing popup
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-button" onClick={hidePopup}>X</button>
            {popupContent}
          </motion.div>
        </div>
      )} */}
      </Router>
  );
}

export default App;