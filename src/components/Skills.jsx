import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGithubSquare, FaGitAlt, FaFigma } from 'react-icons/fa';
import { RiJavascriptFill, RiNpmjsFill } from 'react-icons/ri';
import { SiRedux, SiExpress, SiMongodb, SiJira } from 'react-icons/si';

const skills = [
  { icon: <FaReact color='var(--primary-text-color)'/>, name: 'React' },
  { icon: <RiJavascriptFill color='var(--primary-text-color)'/>, name: 'JavaScript' },
  { icon: <FaHtml5 color='var(--primary-text-color)' />, name: 'HTML5' },
  { icon: <FaCss3Alt color='var(--primary-text-color)' />, name: 'CSS3' },
  { icon: <FaSass color='var(--primary-text-color)' />, name: 'Sass' },
  { icon: <SiRedux color='var(--primary-text-color)' />, name: 'Redux' },
  { icon: <FaBootstrap color='var(--primary-text-color)' />, name: 'Bootstrap' },
  { icon: <SiExpress color='var(--primary-text-color)' />, name: 'Express.js' },
  { icon: <SiMongodb color='var(--primary-text-color)' />, name: 'MongoDB' },
  { icon: <FaGithubSquare color='var(--primary-text-color)' />, name: 'GitHub' },
  { icon: <RiNpmjsFill color='var(--primary-text-color)' />, name: 'NPM' },
  { icon: <FaGitAlt color='var(--primary-text-color)' />, name: 'Git' },
  { icon: <SiJira color='var(--primary-text-color)' />, name: 'Jira' },
  { icon: <FaFigma color='var(--primary-text-color)' />, name: 'Figma' },
];

const Skills = () => {
  return (
    <div className='skill-main-container'>
      <div className='skillTitleWrapper'>
        <h1 className='skillTitle'>SKILLS</h1>
        <h1 className='titleDescription'>The Skills, Tools, and Technologies I Generally Use:</h1>
      </div>
      <div className='skillContentWrapper'>
        {/* <div className='skill-lefside-container'>
        left side
        </div> */}
        <div className='skill-rightside-container'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-item'>
              {skill.icon}
              <p className='skill-name'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
