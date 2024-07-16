import React from 'react';
import splashScreenAnimation from '../assets/icons/splashAnimation.json';
import Lottie from 'lottie-react';
import { PortfolioLogo } from '../assets/icons';
import PortfolioLogoJsx from './portfolio-logo';
import { AnimatePresence, motion } from 'framer-motion';

const SplashScreen = ({ splashScreenVisible }) => {
  return (
    <AnimatePresence>
      {splashScreenVisible && (
        <motion.div
          className='splashScreenContainer'
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className='splashLotieWrapper'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.8 }}
          >
            <Lottie animationData={splashScreenAnimation} loop={true} />
          </motion.div>
          <motion.div
            className='portfolioLogo'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
          >
            <PortfolioLogoJsx />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
 