import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import kingshukAboutImage from '../assets/pictures/kingshukAboutImg.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import useBreakpoints from './responsive';

const Aboutme = () => {
  const { isMobile } = useBreakpoints();
  const ref = useRef(null);
  const inView = useInView(ref);
  const leftSideControls = useAnimation();
  const rightSideControls = useAnimation();
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (inView) {
      // First, animate out the "About Me" text
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

      // After a delay, show the main content
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
      }, 2000);  // Delay should match the duration of the "About Me" text exit animation
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
            transition={{ duration: 2 }}
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
              animate={{
                rotateY: [0, 360, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
              ABOUT ME
            </motion.div>
            <div className='aboutmeContentWrapper'>
              <motion.div
                className="aboutLeftside"
                initial={{ opacity: 0, x: '-100%' }}
                animate={leftSideControls}
                exit={{ opacity: 0, x: '0', y: '100%', scale: 0, transform: { duration: 0.3 } }}
              >
                <img
                  src={kingshukAboutImage}
                  alt="Kingshuk Roy"
                  className="kingshukAboutImage"
                />
                <div className="aboutSocialWrapper">
                  <p>Kingshuk Roy</p>
                  <div>
                    <FaLinkedin />
                    <FaInstagram />
                    <FaGithub />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="aboutRightside"
                initial={{ opacity: 0, x: '100%' }}
                animate={rightSideControls}
                exit={{ opacity: 0, x: '100%', scale: 0 }}
              >
                <div>
                  <h1>Hey!! Whatsapp.</h1>
                </div>
                <p className="aboutme-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                  laboriosam minus eaque vitae veritatis numquam rerum repudiandae
                  quibusdam. Illum corrupti enim eligendi quod et nihil nulla accusantium
                  quidem provident amet?
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Aboutme;
