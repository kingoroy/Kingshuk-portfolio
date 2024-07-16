import React, { useState } from 'react';
import { PortfolioLogo } from '../assets/icons';
import ThemeToggle from './themeToggle';
import { FaBars } from 'react-icons/fa';
import useBreakpoints from './responsive';

const Navbar = ({ handleScrollToPage }) => {
  const { isMobile } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-main-container'>
      <div style={{marginLeft: '-20px'}}>
        <PortfolioLogo size={isMobile ? 8 : 14} />
        </div>
      {isMobile ? (
        <div className='mobilenavRight'>
          <ThemeToggle />
          <div className='hamburger-icon' onClick={toggleMenu}>
            <FaBars />
          </div>
          {isMenuOpen && (
            <ul className='navbar-menuWrapper'>
              <li onClick={() => { handleScrollToPage(0); setIsMenuOpen(false); }}>Home</li>
              <li onClick={() => { handleScrollToPage(1); setIsMenuOpen(false); }}>About me</li>
              <li onClick={() => { handleScrollToPage(2); setIsMenuOpen(false); }}>Skills</li>
              <li onClick={() => { handleScrollToPage(3); setIsMenuOpen(false); }}>Experience</li>
              <li onClick={() => { handleScrollToPage(4); setIsMenuOpen(false); }}>Personal Project</li>
            </ul>
          )}
        </div>
      ) : (
        <ul className='navbarmenuwrapper'>
          <li onClick={() => handleScrollToPage(0)}>Home</li>
          <li onClick={() => handleScrollToPage(1)}>About me</li>
          <li onClick={() => handleScrollToPage(2)}>Skills</li>
          <li onClick={() => handleScrollToPage(3)}>Experience</li>
          <li onClick={() => handleScrollToPage(4)}>Personal Project</li>
        </ul>
      )}
      {!isMobile && (
        <div className='themeToggleWrapper'>
          <ThemeToggle />
        </div>
      )}
    </div>
  );
};

export default Navbar;
