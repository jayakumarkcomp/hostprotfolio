import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import food from '../../Pic/food.jpg'
import './index.css'

const projects = [
  {
    "name": "Food Munch",
    "url": "https://firstjkproject.ccbp.tech",
    "image":'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg',
    "technologies": ["HTML", "CSS", "Bootstrap"]

  },
  {
    "name": "Wikipedia Search Application",
    "url": "https://wikipediaseajk.ccbp.tech",
    "image":'https://img.freepik.com/free-vector/search-bar-with-magnifying-glass_78370-2919.jpg?w=996&t=st=1726650285~exp=1726650885~hmac=50b09e3e7d8a1b0743f8b928448009a51a0edff81f03c2f652ebfe182737921e',
    "technologies": ["HTML", "CSS", "JS", "REST API Calls", "Bootstrap"]
  },
  {
    "name": "Movies App ",
    "url": "https://jaykuprimeflix.ccbp.tech",
    'image':'https://cdn.pixabay.com/photo/2024/05/15/20/44/app-8764508_640.jpg',
    "technologies": ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap", "React Slick", "Figma", "client storage"]
  }
];

const Project = () => {
  const settings = {
    dots: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed:1000,
    
  };

  return (
    <div >
      <h2>Project</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className='card' >
            <h2>Project</h2>
            <h3>{project.name}</h3>
            <img src={project.image} alt ='food' className='img' />
            <p>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
            <p>Technologies: {project.technologies.join(', ')}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;