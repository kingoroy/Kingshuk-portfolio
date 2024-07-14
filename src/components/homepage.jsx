import React from 'react'
import { FrontendCoder } from '../assets/icons';
const HomePage = () => {
  return (
    <div className='homepage-main-container'>
      <div className='homepage-leftside'>
        <div>
        <h1 className='hiThere'>Hi, I'm</h1>
        <h1 className='myName'>Kingshuk Roy</h1>
        </div>
        <div>
            <div className='smallDescription'>A Passionate <span className='frontendDeveloper'>Frontend Development</span> with 2.5 Years experience creating user friendly websites.
            </div>
        </div>
        <div className='resume-btn-container'>
            <div className='contact-btn'>Contact Me</div>
            <div className='resume-btn'>Get Resume</div>
        </div>
      </div>
      <div className='homepage-rightside'>
        <FrontendCoder />
      </div>
    </div>
  )
}

export default HomePage;
