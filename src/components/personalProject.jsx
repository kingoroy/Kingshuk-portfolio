import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { DesicartIcon } from '../assets/icons';
import { TiAttachment } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import useBreakpoints from './responsive';
import { redirectDesicart, redirectDesicartGithub, redirectGithub } from './helper';

const PersonalProject = () => {
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
      // Animate out the "PROJECT" text
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
      }, titleTextTimeout);  // Delay should match the duration of the "PROJECT" text exit animation
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
            PROJECT
          </motion.div>
        )}
      </AnimatePresence>
      <div className="inviewAnalyzer" ref={ref} />
      {showContent && (
        <AnimatePresence>
          <div className='project-main-container'>
          <motion.div
              className='aboutme-btn'
              initial={{opacity: 0, scale: 0}}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: [0, 360, 360],
              }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 1 },
                rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}>
              PROJECT
            </motion.div>
            <div className='project-contentWrapper'>
              <motion.div
                className='projectLeftSide'
                initial={{ opacity: 0, x: '-100%' }}
                animate={leftSideControls}
                exit={{ opacity: 0, x: '0', y: '100%', scale: 0, transform: { duration: 0.3 } }}
              >
                <div className='logoWithNamerapper'>
                  <DesicartIcon size={isMobile ? 80 : 150} />
                </div>
                <div className='cardContentWrapper'>
                  <h3>Desicart (In progress)</h3>
                  <p className='projectDesc'>Desicart is an innovative eCommerce platform designed to provide a seamless and advanced online shopping experience. It features email verification with OTP for secure login, infinite session duration, cross-device login for consistency, easy account deletion, one-tap login for returning users, infinite scrolling on product listings, and dynamic filters for quick product searches and so on.</p>
                  <div className='usedTech'>
                    <p>React.js</p>
                    <p>Javascript</p>
                    <p>Scss</p>
                    <p>Redux</p>
                  </div>
                </div>
                <div className='linkWrapper'>
                  <div onClick={redirectDesicart}><TiAttachment />
                    <p>Link Preview</p>
                  </div>
                  <div onClick={redirectDesicartGithub}><FaGithub />
                    <p>View Code</p>
                  </div>
                </div>
              </motion.div>
              {/* Uncomment and update the right side content if needed */}
              {/* <motion.div
                className="projectRightSide"
                initial={{ opacity: 0, x: '100%' }}
                animate={rightSideControls}
                exit={{ opacity: 0, x: '100%', scale: 0 }}
              >
                <p>Desicart is a cutting-edge eCommerce platform designed to offer a seamless and advanced online shopping experience. The website incorporates state-of-the-art features to enhance user convenience and security. Key functionalities include:</p>
                <ul>
                  <li>
                    <span>Email Verification with OTP for Login:</span> Users can verify their email addresses using a one-time password (OTP) for secure login.
                  </li>
                  <li>
                    <span>Infinite Session Duration:</span> Logged-in users enjoy uninterrupted access without the need for frequent re-authentication.
                  </li>
                  <li>
                    <span>Cross-Device Login:</span> Users can stay logged in across multiple devices, ensuring a consistent experience.
                  </li>
                  <li>
                    <span>Account Deletion:</span> Users have the option to delete their accounts if they choose to do so.
                  </li>
                  <li>
                    <span>One-Tap Login:</span> Quick and easy login for users who have previously logged in using their email.
                  </li>
                  <li>
                    <span>Infinite Scrolling:</span> The product listing page supports infinite scrolling, allowing users to browse through products seamlessly.
                  </li>
                  <li>
                    <span>Dynamic Filters:</span> Advanced filtering options enable users to quickly find products based on various criteria.
                  </li>
                </ul>
              </motion.div> */}
            </div>
          </div>
        </AnimatePresence >
      )}
    </>
  );
}

export default PersonalProject;
