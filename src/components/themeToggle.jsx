import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun } from 'react-icons/fi';
import { HiOutlineMoon } from "react-icons/hi2";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('isDarkMode')) || false
  );
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('isDarkMode', JSON.stringify(newMode));
    document.body.classList.toggle('dark-mode', newMode);
    console.log('onclick');
  };

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('isDarkMode')) || false;
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  return (
    <div className="toggle-container" onClick={() =>toggleDarkMode()}>
      <div className={`toggle-button`} style={{display: 'flex', cursor: 'pointer'}}>
        <AnimatePresence>
          {!isDarkMode ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HiOutlineMoon size={25} color='black'/>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FiSun size={25} color='white'/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThemeToggle;
