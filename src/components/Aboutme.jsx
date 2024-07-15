import React, { useEffect, useState } from 'react'
import kingshukAboutImage from '../assets/pictures/kingshukAboutImg.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import useBreakpoints from './responsive';

const Aboutme = ({ scrollY, windowWidth, scrollYRef }) => {
  const { isMobile } =useBreakpoints();

  const [about, setAbout] = useState(true);
  useEffect(() => {
    if (scrollYRef.current <= windowWidth * 1.5 || scrollYRef.current >= windowWidth * 2.5) {
      setTimeout(() => {
        setAbout(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setAbout(true);
      }, 2000);
    }
  }, [scrollYRef, windowWidth, about]);
  return (
    <>
      {about ?
        <h1>ABOUT</h1>
        :
        <div className='about-main-container'>
            {isMobile &&
              <div className='aboutme-btn'>
                About Me
              </div>
            }
          <div className='aboutLeftside'>
            {/* <div className='leftImageWrapper'> */}
            <img src={kingshukAboutImage} alt='kingshuk about' className='kingshukAboutImage' />
            <div className='aboutSocialWrapper'>
              <p>Kingshuk Roy</p>
              <div>
                <FaLinkedin />
                <FaInstagram />
                <FaGithub />
              </div>
            {/* </div> */}
            </div>
          </div>
          <div className='aboutRightside'>
            <div>
              {!isMobile &&
              <div className='aboutme-btn'>
                About Me
              </div>}
              <h1>Hey!! Whatsapp.</h1>
            </div>
            <p className='aboutme-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam minus eaque vitae veritatis numquam rerum repudiandae quibusdam. Illum corrupti enim eligendi quod et nihil nulla accusantium quidem provident amet?</p>
          </div>
        </div>
      }
    </>
  )
}

export default Aboutme
