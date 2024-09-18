import React from "react"
import { Chrono } from "react-chrono";
import Jaii from '../../Pic/hi.jpg'
import './index.css'




function Timeline() {

    const items = [{
        title: "2013 to 2016",
        cardTitle: "Bachelor of Science",
        url: "Computer Science ",
        cardSubtitle:"Computer Science ",
        cardDetailedText: "Second Class",
       
      }, 
      {
        title: "2016 to 2018",
        cardTitle: "Master of Science",
        url: "Computer Science ",
        cardSubtitle:"Computer Science ",
        cardDetailedText: "First Class",
       
      }, 
      {
        title: "2019 to 2022",
        cardTitle: "Neeyamo Enterprise Solution",
        url: "Service Devliver executive ",
        cardSubtitle:"Service Devliver executive  ",
        cardDetailedText: "Service Devliver executive",
        
      }, 
      
    
      {
        title: "2022 to 2022",
        cardTitle: "I process service india ",
        url: "Senior associate ",
        cardSubtitle:" Senior associate ",
        cardDetailedText: "Senior associate",
      
      }, 
 
      {
        title: "2023 to 2024",
        cardTitle: "Nxtwave Technologies",
        url: "Mern Fullstack Trainee ",
        cardSubtitle:"Mern Fullstack Trainee",
        cardDetailedText: "Mern Fullstack Trainee",
        
      },
      ];
    return (
        <div className="app" >
          <div className="cont">
          <h1 className="text">Education and Employment</h1>
          <div>
          <img src={Jaii} className='im'/>
          </div>
          

          </div>
          


          <div className="chrono">

        <div style={{ width: "800px", height: "400px" }}>
          <Chrono items={items} />
          </div>
        </div>
        </div>
      )
    
}

export default Timeline;