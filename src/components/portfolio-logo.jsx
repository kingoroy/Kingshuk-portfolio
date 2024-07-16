import React from 'react'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { CgFormatSlash } from "react-icons/cg";
import {motion} from 'framer-motion';
import useBreakpoints from './responsive';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, delay: 0.5 }
  }
};

const nameVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, delay: 1 }
  }
};


const PortfolioLogoJsx = () => {
  const {isMobile} =useBreakpoints();
  return (
    <div>
      <motion.h1
        className='portfolio-logo-container'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className='portfolio-logo-container lessThan' variants={itemVariants}>
          <FaLessThan size={!isMobile ? 70 : 40} />
        </motion.div>
        <motion.div className='portfolio-logo-container' variants={letterVariants}>
          <span className='firstLetter'>K</span>
        </motion.div>
        <motion.div className='portfolio-logo-container' variants={nameVariants}>
          <span>ingshuk</span>
        </motion.div>
        <motion.div className='portfolio-logo-container greaterThan' variants={itemVariants}>
          <CgFormatSlash size={!isMobile ? 100 : 70} />
        </motion.div>
        <motion.div className='portfolio-logo-container greaterThan' variants={itemVariants}>
          <FaGreaterThan size={!isMobile ? 70 : 40} />
        </motion.div>
      </motion.h1>
    </div>
  );
}

export default PortfolioLogoJsx;