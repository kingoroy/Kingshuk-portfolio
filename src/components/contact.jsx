import React, { useEffect, useRef, useState } from 'react';
import contactAnimationSvg from '../assets/icons/contact.json';
import Lottie from 'lottie-react';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [clickContact, setClickContact] = useState(false);
  const formRef = useRef();
  const arrowRef = useRef();
  const iconRef = useRef();

  const handleClickContact = () => {
    setClickContact(true);
  };

  const handleClickOutside = (e) => {
    if (
      (formRef.current && !formRef.current.contains(e.target))
      // (arrowRef.current && !arrowRef.current.contains(e.target)) ||
      // (iconRef.current && !iconRef.current.contains(e.target))
    ) {
      setClickContact(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formVariants = {
    hidden: { opacity: 0, scale: 0.2, x: '50%', y: '50%' },
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    exit: { opacity: 0, scale: 0.2, x: '50%', y: '50%' }
  };

  const arrowVariants = {
    initial: { rotate: 0 },
    rotated: { rotate: 180 },
    exit: { rotate: 0, opacity: 0 }
  };

  return (
    <>
      <AnimatePresence>
        {!clickContact && (
          <motion.div
            className='contact-floating-container'
            onClick={handleClickContact}
            ref={iconRef}
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
          >
            <Lottie animationData={contactAnimationSvg} loop={true} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {clickContact && (
          <motion.div 
            className='contact-floating-container-arrow' 
            variants={arrowVariants}
            initial="initial"
            animate="rotated"
            exit="exit"
            transition={{ duration: 0.5 }}
            onClick={() => setClickContact(false)}
            ref={arrowRef}
          >
            <IoIosArrowDown size={30} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {clickContact && (
          <motion.div
            className='contact-form-container'
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <form className='contact-form-wrapper'>
              <input placeholder='Enter Your Name' />
              <input placeholder='Enter your Email' />
              <input placeholder="What's in your mind?" />
              <button type='submit' className='formSubmitBtn' onClick={(e)=> e.preventDefault()}>Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
