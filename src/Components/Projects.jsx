import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";



const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Meteo" />
        <ProjectBox projectPhoto={FilmImage} projectName="Impiccato" />
        <ProjectBox projectPhoto={ColourImage} projectName="Todolist" />
        <ProjectBox projectPhoto={BackpackImage} projectName="BarberReservations" />
      </div>

      <h1 className="projectHeading p-2">
        Filtri <b className="insta">Instagram</b> e <b>Tiktok</b>

        <h4 className="ciao2">
          2D Graphic, 360 photos, facetracker, scripts and patches
        </h4>

        <div className="ciao2" >
        
        <a href="https://instagram.com/frank_ceck" className="ciao" target="_blank">
          <FaInstagram />
             INSTAGRAM
        </a>
<br />
        <a href="https://www.tiktok.com/@frankceck?_t=8prMbS6up85&_r=1" className="ciao" target="_blank">
          <GrLinkedin />
            TIKTOK
        </a>
      </div>
      </h1>
      




      
      


      
      {/* <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Levels" />
        <ProjectBox projectPhoto={FilmImage} projectName="Movie" />
        <ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />
        <ProjectBox projectPhoto={BackpackImage} projectName="Backpack" />
        <ProjectBox projectPhoto={GymImage} projectName="Levels" />
        <ProjectBox projectPhoto={FilmImage} projectName="Movie" />
        <ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />
        <ProjectBox projectPhoto={BackpackImage} projectName="Backpack" />
      </div> */}
    </div>
  );
};

export default Projects;
