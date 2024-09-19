import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    MeteoDesc:
      "Meteo App, with HTML, CSS, JAVASCRIPT. Api weather.",
    MeteoGithub: "https://github.com/Francescodev1/AppMeteo",
    MeteoWebsite: "https://app-meteo-eight.vercel.app/",

    ImpiccatoDesc:
    "Gioco dell'Impiccato. Semplicemente HTML, CSS, JAVASCRIPT. Hai un solo Jolly, non sprecarlo. Enjoy",
    ImpiccatoGithub: "https://github.com/Francescodev1/Impiccato",
    ImpiccatoWebsite: "https://impiccato-one.vercel.app/",

    TodolistDesc:
      "To Do List. Realizzato con React e Vite. Libreria drag e drop per spostare i post",
    TodolistGithub: "https://github.com/Francescodev1/ToDoList",
    TodolistWebsite: "https://to-do-list-bice-gamma.vercel.app/",

    BarberReservationsDesc:
      "Web di prenotazioni per un Barber Shop. Tecnologia usata Laravel Mvc. ",
      BarberReservationsGithub: "#",
      BarberReservationskWebsite: "#",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Sit
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
