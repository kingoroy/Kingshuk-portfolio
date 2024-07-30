import React from 'react';
import profilePic from '../assets/pictures/kingshukExperienceImage.jpg'; // Ensure you have this image in the specified path
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="sidebar">
        <div className="profile">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="contact">
          <h3> Contact</h3>
            <div className='divider-horizontal'/>
          <p> <CiPhone /> +91 830 9799 084</p>
          <p><MdOutlineEmail /> krsourimadhusudhan@gmail.com</p>
          <p><LiaAddressCard /> I-83/1 Malikarjuna Nagar<br />Near Amma Sakshi Gardens,<br />Prashanthpur (M), Medchal (Dist)<br />Telangana – 500 098</p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className='divider-horizontal'/>
          <p><strong>Osmania University</strong><br />MBA Marketing - 2022</p>
          <p><strong>ACE Engineering College Engr.</strong><br />B.Tech, Computer Science - 2019</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className='divider-horizontal'/>
          <ul>
            <li>React JS, Angular, Java, Spring Boot</li>
            <li>CSS, Bootstrap, HTML5</li>
            <li>DevOps: Azure DevOps</li>
            <li>Automation Platform: Azure</li>
            <li>Linux Shell Scripts</li>
            <li>Databases: MongoDB, MySQL, SQLite, PostgreSQL</li>
          </ul>
        </div>
        <div className="languages">
          <h3>Languages</h3>
          <div className='divider-horizontal'/>
          <p>English</p>
          <p>Hindi</p>
          <p>Telugu</p>
        </div>
      </div>
      <div className="main-content">
      <h2>Madhu Sudhan K.N</h2>
      <h3>Sr. Associate Consultant</h3>
        <div className="profile-summary">
          <h2>Profile</h2>
          <div className='divider-horizontal'/>
          <p>With 5+ years in software development, I specialize in full-stack web development using React.js, AngularJS, Spring Boot, and MongoDB. I optimize MongoDB queries, implement dynamic client-side routing with React Router, and integrate RESTful APIs using Axios/Fetch for improved responsiveness. I manage VMware-based hybrid and private cloud platforms, build Azure DevOps pipelines, and conduct code reviews, ensuring project success through collaborative efforts with teams and clients.</p>
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <div className='divider-horizontal'/>
          <div className="experience">
            <h3>Infosys</h3>
            <p>2024 - Present</p>
            <h4>Full Stack Software Developer</h4>
            <p>Developed full-stack web applications using React.js, Angular, Spring Boot, and MongoDB. Optimized MongoDB queries for efficient data retrieval. Integrated RESTful APIs using Axios/Fetch for improved responsiveness. Implemented client-side routing with React Router. Managed Azure DevOps pipelines and collaborated with UI/UX designers. Engaged in daily standup meetings with team members and clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
