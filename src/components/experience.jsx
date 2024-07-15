import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import kingshukExperienceImage from '../assets/pictures/kingshukExperienceImage.jpg';

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const leftSideControls = useAnimation();
  const rightSideControls = useAnimation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (inView) {
      // Animate out the "Experience" text
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
      }, 2000);  // Delay should match the duration of the "Experience" text exit animation
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
            EXPERIENCE
          </motion.div>
        )}
      </AnimatePresence>
      <div className="inviewAnalyzer" ref={ref} />
      {showContent && (
        <AnimatePresence>
          <div className='experience-main-container'>
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
              EXPERIENCE
            </motion.div>
            <div className='experienceContentWrapper'>
              <motion.div
                className='experienceLeftSide'
                initial={{ opacity: 0, x: '-100%' }}
                animate={leftSideControls}
                exit={{ opacity: 0, x: '0', y: '100%', scale: 0, transform: { duration: 0.3 } }}
              >
                <div className='expContentFirst'>
                  Currently, I am working at INFOSYS LIMITED as a Senior Systems Engineer. With over 2.4 years of experience at Infosys, I have been instrumental in delivering high-quality frontend solutions. Notably, I have contributed to a major project for a prominent Mexican airline company, where I focused on enhancing their web application's user interface. My role involved optimizing performance, improving user interactions, and ensuring cross-browser compatibility to deliver a robust and user-friendly product.
                </div>
                <div className='expContentSecond'>
                  My journey at Infosys has equipped me with the expertise to tackle complex challenges and collaborate effectively with cross-functional teams. I am passionate about leveraging my skills to drive innovation and deliver exceptional results in the realm of frontend development.
                </div>
              </motion.div>
              <motion.div
                className="experienceRightSide"
                initial={{ opacity: 0, x: '100%' }}
                animate={rightSideControls}
                exit={{ opacity: 0, x: '100%', scale: 0 }}
              >
                <img src={kingshukExperienceImage} alt='experience' />
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Experience;
