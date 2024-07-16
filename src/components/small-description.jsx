import React from 'react';
import { motion } from 'framer-motion';

const SmallDescription = ({ text, delay = 0.2, duration = 1, color='var(--primary-text-color)', highlightColor='#FF6347'}) => {
  const colorChangeVariants = {
    initial: (i) => ({
      opacity: 0,
      color: highlightColor, // Tomato color for example
      transition: { delay: i * delay, duration: duration, type: 'spring', stiffness: 100 },
    }),
    animate: (i) => ({
      opacity: 1,
      color: color, // Change to your desired color
      transition: { delay: i * delay, duration: duration, type: 'spring', stiffness: 100 },
    }),
  };

  const descriptionText = 'A Passionate ';
  const highlightText = text || 'Frontend Developer';
  const remainingText = ' with 2.5 years of experience creating user-friendly websites.';

  return (
    <div className='smallDescription'>
      {!text && descriptionText}
      <span className='frontendDeveloperWrapper'>
        {highlightText.split('').map((char, index) => (
          <motion.span
            key={index}
            className='frontendDeveloper'
            variants={colorChangeVariants}
            initial='initial'
            animate='animate'
            custom={index}
          >
            {char}
          </motion.span>
        ))}
      </span>
      {!text && remainingText}
    </div>
  );
};

export default SmallDescription;
