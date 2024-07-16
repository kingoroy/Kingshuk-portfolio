import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import kingshukAboutImage from '../assets/pictures/kingshukAboutImg.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import useBreakpoints from './responsive';
import SmallDescription from './small-description';

const Aboutme = () => {
  const { isMobile } = useBreakpoints();
  const ref = useRef(null);
  const inView = useInView(ref);
  const leftSideControls = useAnimation();
  const rightSideControls = useAnimation();
  const [showContent, setShowContent] = useState(false);
  const titleTextTimeout = isMobile ? 1000 : 2000;
  const titleTextDuration = isMobile ? 1 : 2;

  useEffect(() => {
    if (inView) {
      setShowContent(false);
      leftSideControls.start({
        opacity: 0,
        x: '-100%',
        transition: { duration: 0.5 },
      });
      rightSideControls.start({
        opacity: 0,
        x: '100%',
        transition: { duration: 0.5 },
      });

      setTimeout(() => {
        setShowContent(true);
        leftSideControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        });
        rightSideControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        });
      }, titleTextTimeout);
    } else {
      setShowContent(false);
    }
  }, [inView, leftSideControls, rightSideControls]);

  return (
    <>
      <AnimatePresence>
        {!inView && (
          <motion.div
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: titleTextDuration }}
          >
            About Me
          </motion.div>
        )}
      </AnimatePresence>
      <div className="inviewAnalyzer" ref={ref} />
      {showContent && (
        <AnimatePresence>
          <div className="about-main-container">
            <motion.div
              className='aboutme-btn'
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: [0, 360, 360],
              }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 1 },
                rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              ABOUT ME
            </motion.div>
            <div className='aboutmeContentWrapper'>
              <motion.div
                className="aboutLeftside"
                initial={{ opacity: 0, x: '-100%' }}
                animate={leftSideControls}
                exit={{ opacity: 0, x: '0', y: '100%', scale: 0, transition: { duration: 0.3 } }}
              >
                <img
                  src={kingshukAboutImage}
                  alt="Kingshuk Roy"
                  className="kingshukAboutImage"
                />
                <div className="aboutSocialWrapper">
                  <p>Kingshuk Roy</p>
                  <div>
                    <div><FaLinkedin /></div>
                    <div><FaInstagram /></div>
                    <div><FaGithub /></div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="aboutRightside"
                initial={{ opacity: 0, x: '100%' }}
                animate={rightSideControls}
                exit={{ opacity: 0, x: '100%', scale: 0 }}
              >
                <div style={{ fontSize: '35px' }}>
                  <SmallDescription text='Hey Whats up!!' />
                </div>
                <p className="aboutme-content">
                  I am a Senior Systems Engineer at Infosys with over 2.4 years of experience as a Frontend Developer. I specialize in React, Redux, and UI design, with a passion for creating innovative and user-friendly web applications. My focus is on delivering high-quality frontend solutions that enhance user experience and meet client needs.
                </p>
                {/* <div className="education-section">
                  <h3>Educational Background:</h3>
                  <ul>
                    <li>B.Tech (2021) – Grade A</li>
                    <li>Higher Secondary (2017) – Grade A</li>
                    <li>Secondary (2015) – Grade A+</li>
                  </ul>
                </div> */}
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Aboutme;
