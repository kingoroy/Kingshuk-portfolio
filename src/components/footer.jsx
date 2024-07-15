import React from 'react'
import { PortfolioLogo } from '../assets/icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import useBreakpoints from './responsive';

const Footer = () => {
  const {isMobile } = useBreakpoints();

  const year = new Date().getFullYear()
  return (
    <div className='footer-main-container'>
      {!isMobile &&
      <div className='footerLeftSide'>
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
      </div>}
      <div>&copy; kingshuk.webdev.vercel.app {year}</div>
      {!isMobile &&<PortfolioLogo size={10} />}
    </div>
  )
}

export default Footer;
