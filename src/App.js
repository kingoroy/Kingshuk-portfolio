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
  const scrollYRef = useRef(scrollY);
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const experienceRef = useRef();
  const personalProjectRef = useRef();
  const scrollTimeoutRef = useRef(null);
  const touchStartY = useRef(0);
  const [currentPage, setCurrentPage] = useState(0);

  const pageWidth = window.innerWidth;
  const scrollThreshold = pageWidth / 2; // 50% of the page width

  const handleScroll = (deltaY) => {
    const newScrollY = scrollYRef.current + deltaY;
    const clampedScrollY = Math.min(Math.max(newScrollY, 0), pageWidth * 4);
    setScrollY(clampedScrollY);
    scrollYRef.current = clampedScrollY;

    // Check if scrollY has exceeded the scroll threshold
    if (deltaY > 0 && clampedScrollY > (currentPage * pageWidth) + scrollThreshold) {
      handleScrollToPage(currentPage + 1);
    } else if (deltaY < 0 && clampedScrollY < (currentPage * pageWidth) - scrollThreshold) {
      handleScrollToPage(currentPage - 1);
    }
  };

  const handleScrollToPage = (page) => {
    const clampedPage = Math.min(Math.max(page, 0), 4);
    setScrollY(clampedPage * pageWidth);
    setCurrentPage(clampedPage);
    scrollYRef.current = clampedPage * pageWidth;
  };

  const onWheel = (e) => {
    e.preventDefault();
    handleScroll(e.deltaY);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
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
  };

  const onTouchEnd = () => {
    const pageThreshold = currentPage * pageWidth;
    if (scrollYRef.current > pageThreshold + scrollThreshold) {
      handleScrollToPage(currentPage + 1);
    } else if (scrollYRef.current < pageThreshold - scrollThreshold) {
      handleScrollToPage(currentPage - 1);
    } else {
      handleScrollToPage(currentPage);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentPage]);

  // Define animations for the pages
  const homePageProps = useSpring({
    transform: `translateX(${Math.min(0, -scrollY)}px)`,
    config: { tension: 210, friction: 20 },
  });

  const aboutPageProps = useSpring({
    transform: `translateX(${Math.min(pageWidth, pageWidth - scrollY)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > 0 ? 1 : 0,
    zIndex: scrollY > 0 ? 1 : 0,
  });

  const skillPageProps = useSpring({
    transform: `translateX(${Math.min(2 * pageWidth - scrollY, pageWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > pageWidth ? 1 : 0,
    zIndex: scrollY > pageWidth ? 1 : 0,
  });

  const experiencePageProps = useSpring({
    transform: `translateX(${Math.min(3 * pageWidth - scrollY, 2 * pageWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > pageWidth * 2 ? 1 : 0,
    zIndex: scrollY > pageWidth * 2 ? 1 : 0,
  });

  const personalProjectProps = useSpring({
    transform: `translateX(${Math.min(4 * pageWidth - scrollY, 3 * pageWidth)}px)`,
    config: { tension: 210, friction: 20 },
    opacity: scrollY > pageWidth * 3 ? 1 : 0,
    zIndex: scrollY > pageWidth * 3 ? 1 : 0,
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
      {!splashScreenVisible && (
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
              windowWidth={pageWidth}
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
      )}
    </>
  );
}

export default App;
