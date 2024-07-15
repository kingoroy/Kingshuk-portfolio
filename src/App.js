import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Aboutme from "./components/Aboutme";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import Skills from './components/Skills';
import Footer from './components/footer';
import Experience from './components/experience';
import PersonalProject from './components/personalProject';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const scrollYRef = useRef(scrollY);
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const experienceRef = useRef();
  const personalProjectRef = useRef();
  const scrollTimeoutRef = useRef(null);

  const handleScroll = (deltaY) => {
    const newScrollY = scrollYRef.current + deltaY;
    const clampedScrollY = Math.min(Math.max(newScrollY, 0), window.innerWidth * 4);
    setScrollY(clampedScrollY);
    scrollYRef.current = clampedScrollY;
  };

  const handleScrollEnd = () => {
    let windowWidth = window.innerWidth;

    if (scrollYRef.current >= windowWidth * 3.5) {
      setScrollY(windowWidth * 4); // Scroll to PersonalProject
      scrollYRef.current = windowWidth * 4;
    } 
    else if (scrollYRef.current >= windowWidth * 2.5) {
      setScrollY(windowWidth * 3); // Scroll to Experience
      scrollYRef.current = windowWidth * 3;
    } 
    else if (scrollYRef.current >= windowWidth * 1.5) {
      setScrollY(windowWidth * 2); // Scroll to Skills
      scrollYRef.current = windowWidth * 2;
    } else if (scrollYRef.current >= windowWidth * 0.5) {
      setScrollY(windowWidth); // Scroll to About
      scrollYRef.current = windowWidth;
    } else {
      setScrollY(0); // Scroll to Home
      scrollYRef.current = 0;
    }
  };

  useEffect(() => {
    const onScroll = (e) => {
      e.preventDefault();
      handleScroll(e.deltaY);

      // Clear previous timeout if still scrolling
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a new timeout to detect when the user stops scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        handleScrollEnd();
      }, 150);
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      handleScroll(e.touches[0].clientY - (scrollYRef.current + window.innerHeight / 2));
    };

    window.addEventListener('wheel', onScroll, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onScroll);
      window.removeEventListener('touchmove', onTouchMove);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Define animations for the pages
  const homePageProps = useSpring({
    transform: `translateX(${Math.min(0, -scrollY)}px)`,
    config: { tension: 210, friction: 20 },
  });

  const aboutPageProps = useSpring({
    transform: `translateX(${Math.min(window.innerWidth, window.innerWidth - scrollY)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > 0 ? 1 : 0,
    zIndex: scrollY > 0 ? 1 : 0,
  });

  const skillPageProps = useSpring({
    transform: `translateX(${Math.min(2 * window.innerWidth - scrollY, window.innerWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > window.innerWidth ? 1 : 0,
    zIndex: scrollY > window.innerWidth ? 1 : 0,
  });

  const experiencePageProps = useSpring({
    transform: `translateX(${Math.min(3 * window.innerWidth - scrollY, 2*window.innerWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > window.innerWidth ? 2 : 0,
    zIndex: scrollY > window.innerWidth ? 2 : 0,
  });

  const personalProjectProps = useSpring({
    transform: `translateX(${Math.min(4 * window.innerWidth - scrollY, 3*window.innerWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > window.innerWidth ? 3 : 0,
    zIndex: scrollY > window.innerWidth ? 3 : 0,
  });

  return (
    <div style={{ overflow: 'hidden', position: 'relative', height: '100vh' }}>
      <Navbar handleScroll={handleScroll} />
      <animated.div
        style={{
          ...homePageProps,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        ref={homeRef}
      >
        <HomePage />
      </animated.div>
      <animated.div
        style={{
          ...aboutPageProps,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        ref={aboutRef}
      >
        <Aboutme 
          windowWidth={window.innerWidth}
          scrollY={scrollY}
          scrollYRef={scrollYRef}
        />
      </animated.div>
      <animated.div
        style={{
          ...skillPageProps,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        ref={skillRef}
      >
        <Skills />
      </animated.div>
      <animated.div
        style={{
          ...experiencePageProps,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        ref={experienceRef}
      >
        <Experience />
      </animated.div>
      <animated.div
        style={{
          ...personalProjectProps,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        ref={personalProjectRef}
      >
        <PersonalProject />
      </animated.div>
      <Footer />
    </div>
  );
}

export default App;
