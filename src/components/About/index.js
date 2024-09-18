import React, { useState } from 'react';

import code from '../../Pic/html.png';
import Jss from '../../Pic/js.jpg';
import Atom from '../../Pic/react.png';
import Progrm from '../../Pic/no.jpg';
import DBS from '../../Pic/mongo.png';
import Sql from '../../Pic/sql.png';


import './index.css'

const About = () => {
  const [about, setAbout] = useState({
    name: 'Asprine To be a Developer',
    role: 'Front End Developer',
    description:
      "I hold a Master's degree in Computer Science (MSc CS) and possess expertise as a skilled Full Stack Developer, specializing in the MERN (MongoDB, Express, React, Node.js) stack.",
    
 
  });

  return (
    <div className='about' id="about">
      <h1>
        I am <span className='aboutname'>{about.name}.</span>
      </h1>
      <h2 className='aboutrole'>{about.role}.</h2>
      <p className='aboutdesc'>{about.description }</p>

     

      <h2 className='skills-head'>Skills</h2>
      <ul className='skills-list'>
      <li className='linked'>
  <img src={code} alt="Coding" className='code-image' />
 <button>HTML/CSS</button> 
</li>
        <li className='linked'>
        <img src={Jss} alt="Coding" className='code-image' />
          <button>Javascript</button> 
        </li>
        <li className='linked'> 
        <img src={Atom} alt="Coding" className='code-image' />
          <button>ReactJS</button>
        </li>
        <li className='linked'> 
        <img src={Progrm} alt="Coding" className='code-image' />
          <button>NodeJs</button>
        </li>
        <li className='linked'>
        <img src={DBS} alt="Coding" className='code-image' />
           <button>MongoDB</button>
        </li>
        <li className='linked'>
          <img src={Sql} alt="Coding" className='code-image' />
           <button>SQL</button>
        </li>
      </ul>
    </div>
  )
}

export default About