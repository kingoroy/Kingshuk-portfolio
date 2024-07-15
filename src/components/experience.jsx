import React from 'react'
import kingshukExperienceImage from '../assets/pictures/kingshukExperienceImage.jpg';

const Experience = () => {
  return (
    <div className='experience-main-container'>
      <h1>Experience</h1>
      <div className='experienceContentWrapper'>
        <div className='experienceLeftSide'>
          <div className='expContentFirst'>
            Currently, I am working at INFOSYS LIMITED as a Senior Systems Engineer. With over 2.4 years of experience at Infosys, I have been instrumental in delivering high-quality frontend solutions. Notably, I have contributed to a major project for a prominent Mexican airline company, where I focused on enhancing their web application's user interface. My role involved optimizing performance, improving user interactions, and ensuring cross-browser compatibility to deliver a robust and user-friendly product.
          </div>
          <div className='expContentSecond'>
            My journey at Infosys has equipped me with the expertise to tackle complex challenges and collaborate effectively with cross-functional teams. I am passionate about leveraging my skills to drive innovation and deliver exceptional results in the realm of frontend development.
          </div>
        </div>
        <div className="experienceRightSide">
          <img src={kingshukExperienceImage} alt='experience' />
        </div>
      </div>
    </div>
  )
}

export default Experience;