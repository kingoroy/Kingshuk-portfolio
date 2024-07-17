import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Aboutme from "./components/Aboutme";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import Skills from './components/Skills';
import Footer from './components/footer';
import Experience from './components/experience';
import PersonalProject from './components/personalProject';
import SplashScreen from './components/splashScreen';
import Contact from './components/contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(null);
  const scrollYRef = useRef(scrollY);
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const experienceRef = useRef();
  const personalProjectRef = useRef();
  const scrollTimeoutRef = useRef(null);
  const touchStartY = useRef(0);

  const handleScroll = (deltaY) => {
    const newScrollY = scrollYRef.current + deltaY;
    const clampedScrollY = Math.min(Math.max(newScrollY, 0), window.innerWidth * 4);
    setScrollY(clampedScrollY);
    scrollYRef.current = clampedScrollY;

    // Determine the scroll direction
    if (deltaY > 0) {
      setScrollDirection('down');
    } else if (deltaY < 0) {
      setScrollDirection('up');
    }
  };

  const handleScrollToPage = (page) => {
    const scrollTo = page * window.innerWidth;
    setScrollY(scrollTo);
    scrollYRef.current = scrollTo;
  };

  const handleScrollEnd = () => {
    let windowWidth = window.innerWidth;

    if (scrollDirection === 'down') {
      if (scrollYRef.current >= windowWidth * 3.1) {
        setScrollY(windowWidth * 4); // Scroll to PersonalProject
        scrollYRef.current = windowWidth * 4;
      } else if (scrollYRef.current >= windowWidth * 2.1) {
        setScrollY(windowWidth * 3); // Scroll to Experience
        scrollYRef.current = windowWidth * 3;
      } else if (scrollYRef.current >= windowWidth * 1.1) {
        setScrollY(windowWidth * 2); // Scroll to Skills
        scrollYRef.current = windowWidth * 2;
      } else if (scrollYRef.current >= windowWidth * 0.1) {
        setScrollY(windowWidth); // Scroll to About
        scrollYRef.current = windowWidth;
      } else {
        setScrollY(0); // Scroll to Home
        scrollYRef.current = 0;
      }
    } else if (scrollDirection === 'up') {
      if (scrollYRef.current >= windowWidth * 3.1) {
        setScrollY(windowWidth * 3); // Scroll to Experience
        scrollYRef.current = windowWidth * 3;
      } else if (scrollYRef.current >= windowWidth * 2.1) {
        setScrollY(windowWidth * 2); // Scroll to Skills
        scrollYRef.current = windowWidth * 2;
      } else if (scrollYRef.current >= windowWidth * 1.1) {
        setScrollY(windowWidth); // Scroll to About
        scrollYRef.current = windowWidth;
      } else if (scrollYRef.current >= windowWidth * 0.5) {
        setScrollY(windowWidth * 0.1); // Scroll to Home
        scrollYRef.current = 0;
      } else {
        setScrollY(0); // Stay on Home
        scrollYRef.current = 0;
      }
    }
  };

  const onWheel = (e) => {
    e.preventDefault();
    handleScroll(e.deltaY);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      handleScrollEnd();
    }, 150);
  };

  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    handleScroll(deltaY);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      handleScrollEnd();
    }, 150);
  };

  useEffect(() => {
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollDirection]);

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
    transform: `translateX(${Math.min(3 * window.innerWidth - scrollY, 2 * window.innerWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > window.innerWidth ? 2 : 0,
    zIndex: scrollY > window.innerWidth ? 2 : 0,
  });

  const personalProjectProps = useSpring({
    transform: `translateX(${Math.min(4 * window.innerWidth - scrollY, 3 * window.innerWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > window.innerWidth ? 3 : 0,
    zIndex: scrollY > window.innerWidth ? 3 : 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar handleScrollToPage={handleScrollToPage} splashScreenVisible={splashScreenVisible} />
      <SplashScreen splashScreenVisible={splashScreenVisible} />
      {!splashScreenVisible &&
        <div style={{ overflow: 'hidden', position: 'relative', height: '100vh' }}>
          <Contact />
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
        </div>}
    </>
  );
}

export default App;
