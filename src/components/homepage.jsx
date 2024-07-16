import React, { useEffect, useRef, useState } from 'react';
import { FrontendCoder, HiCoding } from '../assets/icons';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import useBreakpoints from './responsive';
import SmallDescription from './small-description';
import MyName from './myname';
import animatedData from '../assets/icons/hello.json';
import Lottie from 'lottie-react';
// import {hiBoy} from '../assets/pictures/'
const HomePage = () => {
  const { isMobile } = useBreakpoints();
  const ref = useRef(null);
  const inView = useInView(ref);
  const leftSideControls = useAnimation();
  const rightSideControls = useAnimation();
  const [firstLoad, setFirstLoad] = useState(true);
  const [showContent, setShowContent] = useState(firstLoad ? true : false);

  const titleTextTimeout = isMobile ? 200 : firstLoad ? 0 : 2000;  // Ensure no delay for mobile on first load
  const titleTextDuration = isMobile ? 1 : firstLoad ? 0 : 2;
  useEffect(() => {
    if (inView) {
      setShowContent(false);
      setFirstLoad(false)
      leftSideControls.start('hiddenLeft');
      rightSideControls.start('hiddenRight');

      setTimeout(() => {
        setShowContent(true);
        leftSideControls.start('visible');
        rightSideControls.start('visible');
      }, titleTextTimeout);
    } else {
      setShowContent(false);
    }
  }, [inView, leftSideControls, rightSideControls, firstLoad, titleTextTimeout]);
  const animationVariants = {
    hiddenLeft: {
      opacity: 0,
      x: '-100%',
      transition: { duration: 0.5 }
    },
    hiddenRight: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.5 }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 }
    },
    emoji: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
      hover: { scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.3 } }
    },
    rightSide: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1, transition: { duration: 1 } }
    },
    // title: {
    //   initial: { opacity: 0 },
    //   animate: { opacity: 1 },
    //   exit: { opacity: 0 },
    //   transition: { duration: 2 }
    // }
  };

  return (
    <>
      <AnimatePresence>
        {!inView && !firstLoad && (
          <motion.div
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: titleTextDuration }}
          >
            Home
          </motion.div>
        )}
      </AnimatePresence>
      <div className="inviewAnalyzer" ref={ref} />
      {showContent && (
        <AnimatePresence>
          <div className='homepage-main-container'>
            <motion.div className='homepage-leftside'
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <div>
                <h1 className='hiThere'>
                  <motion.span
                    variants={animationVariants.emoji}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    ✌️
                  </motion.span>
                  Hi, I'm
                </h1>
                <MyName />
              </div>
              <div>
                <div className='smallDescription'>
                  <SmallDescription />
                </div>
              </div>
              <div className='resume-btn-container'>
                <div className='contact-btn'>Contact Me</div>
                <div className='resume-btn'>Get Resume</div>
              </div>
            </motion.div>
            <motion.div
              className='homepage-rightside'
              variants={animationVariants.rightSide}
              initial="initial"
              animate="animate"
            >
              {/* <FrontendCoder /> */}
              {/* <img src={hi} */}
              {/* <HiCoding /> */}
              <Lottie animationData={animatedData} loop={true} />
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}

export default HomePage;
