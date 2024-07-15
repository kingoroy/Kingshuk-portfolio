import React, { useState } from 'react';
import { PortfolioLogo } from '../assets/icons';
import ThemeToggle from './themeToggle';
import { FaBars } from 'react-icons/fa';
import useBreakpoints from './responsive';

const Navbar = ({ handleScroll }) => {
  const { isMobile } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-main-container'>
      <PortfolioLogo size={isMobile ? 8 : 14} />
      {/* {isMobile &&
      <div className='themeToggleWrapper'>
      </div>} */}
      {isMobile ? (
        <div className='mobilenavRight'>
          <ThemeToggle />
          <div className='hamburger-icon' onClick={toggleMenu}>
            <FaBars />
          </div>
          {isMenuOpen && <ul className={`navbar-menuWrapper`}>
            <li onClick={() => { handleScroll(0); setIsMenuOpen(false); }}>Home</li>
            <li onClick={() => { handleScroll(window.innerWidth); setIsMenuOpen(false); }}>About me</li>
            <li onClick={() => { handleScroll(2 * window.innerWidth); setIsMenuOpen(false); }}>Skills</li>
            <li onClick={() => { handleScroll(3 * window.innerWidth); setIsMenuOpen(false); }}>Experience</li>
            <li onClick={() => { handleScroll(4 * window.innerWidth); setIsMenuOpen(false); }}>Personal Project</li>
          </ul>}
        </div>
      ) : (
        <ul className='navbarmenuwrapper'>
          <li onClick={() => handleScroll(0)}>Home</li>
          <li onClick={() => handleScroll(window.innerWidth)}>About me</li>
          <li onClick={() => handleScroll(2 * window.innerWidth)}>Skills</li>
          <li onClick={() => handleScroll(3 * window.innerWidth)}>Experience</li>
          <li onClick={() => handleScroll(4 * window.innerWidth)}>Personal Project</li>
        </ul>
      )}
      {!isMobile &&
        <div className='themeToggleWrapper'>
          <ThemeToggle />
        </div>}
    </div>
  );
};

export default Navbar;
