import React from 'react';
import { motion } from 'framer-motion';

const shakeVariants = {
  initial: {
    opacity: 1,
    x: 0,
  },
  animate: {
    x: [0, 10, -10, 5, -5, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse',
      delay: 0.5,
    },
  },
};

const MyName = () => (
  <motion.h1 className='myName' variants={shakeVariants} initial='initial' animate='animate'>
    Kingshuk Roy
  </motion.h1>
);

export default MyName;
