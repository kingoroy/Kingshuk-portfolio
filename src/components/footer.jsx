import React from 'react'
import { PortfolioLogo } from '../assets/icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer-main-container'>
      <div className='footerLeftSide'>
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
      </div>
      <div>&copy; kingshuk.webdev.vercel.app {year}</div>
      <PortfolioLogo size={10} />
    </div>
  )
}

export default Footer;
