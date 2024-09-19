import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar2.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Francesco Cecca</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Project">
            <button>
              Progetti 
            </button>
          </Link>
        </div>
        <Tilt
        tiltMaxAngleX={25} 
        tiltMaxAngleY={25} 
        perspective={1000} 
        scale={1.1} 
        transitionSpeed={1500} 
        gyroscope={true}>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
