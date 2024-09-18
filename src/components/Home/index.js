import React, {useState}from 'react';
import Jai from '../../Pic/animi.jpg'
import Hi from '../../Pic/touch.jpg'

import Resume from '../../Pic/Jkresume.pdf'
//import home from '../../Pic/ICode.jpg';
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
//import Project from '../Project';
import { Link } from "react-router-dom"; 
import Email from '../Email.js/index'

import './index.css'



function Home(  ) {
  //const [showProject, setShowProject] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

 
    
 

  return (
    <div className="container" id="home">
    <div className ="img2">
  
      <img src={Hi} alt="Hi image" className='imm'/>
  </div>
   <div className="home2">

  <div className="text1">
  <h1 style={{color:"white",fontWeight:'500',textAlign:'center', marginTop:'90px'}}>Welcome to my Portfolio! </h1>
  
 <div className="image">
  
        <img src={Jai} alt='Profile' className='style'/>
      </div>
      <div>
      <h1 id='heading' style={{textAlign:'center', color:"whitesmoke"}}>Jayakumar Kalaiselvan</h1> 
      </div>
      <div>
         <p style={{textAlign:'center', color:"whitesmoke"}} id='paragraph'> I'm skilled web developer with expertise in Front-end Back-end, and Full-stack web development</p></div> 
         </div>   
         
         <div className='home3'>
         <div  style={{padding:"20px"}}>
  
  <a href={Resume} download="Jkresume.pdf">
    <button>Download Cv </button>
  </a>
  
</div>

<div  style={{padding:"20px"}}>
  
        <Link to='/project' ><button >Project </button></Link>
          
        
      </div>
         </div>
        
         

         <div style={{color:"white", fontWeight:"500", marginTop:'10px', height:"10px"}}><span>
      <a
          href=""
          aria-label='linkedin'
          className='link link--icon'
          target='_blank'
        >
          <MdContactPhone />
        </a>+91 9944831711</span></div>


      <div style={{color:"white", fontWeight:"500", marginTop:'10px', height:"10px"}}><span>
      <a
          href="#" // Change the href to "#" to prevent the default link behavior
          aria-label='email'
          className='link link--icon'
          
        >
          <MdAttachEmail />
        </a>
        jayakumarkcomp@gmail.com</span> 
       
        </div>


      
      
      <div className='aboutcontact center'>
        <a
          href="https://github.com/jayakumarkcomp"
          aria-label='github'
          className='link link--icon'
          target='_blank'
        >
          <FaGithub />
        </a>
       

        <a
          href=" https://www.linkedin.com/in/jayakumar-kalaiselvan-1ba3b417a/"
          aria-label='linkedin'
          className='link link--icon'
          target='_blank'
        >
          <CiLinkedin />
        </a>
        <a
          href="#"
          aria-label='linkedin'
          className='link link--icon'
          target='_blank'
          onClick={() => {
            setShowEmailModal(true); // Show the email modal when the MdAttachEmail icon is clicked
          }}
        >
          <MdAttachEmail />
        </a>
        {showEmailModal && (
          <div className="modal">
            <div className="modal-content">
              <Email /> {/* Render the EmailComponent */}
              <button onClick={() => setShowEmailModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    



</div>
    
      
      
        
     
    
      </div>

    
  
  )
}

export default Home