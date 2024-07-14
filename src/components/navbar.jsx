import React from 'react'
import { PortfolioLogo } from '../assets/icons'
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='navbar-main-container'>
      <PortfolioLogo size={14}/>
      <ul className='navbar-menuWraper'>
        <li>Home</li>
        <li>About me</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Personal Project</li>
      </ul>
      <div className='themeToggleWrapper'>
        <FiSun />
      </div>
    </div>
  )
}

export default Navbar
