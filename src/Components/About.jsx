import React from "react";
import Skills from "./Skills.jsx";


const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Chi sono?
          </h1>
          <p>
  Sono un <b>Svilupaptore web</b> e <b>tech lover</b> appassionato di tecnologia ho intrapreso lo studio  di <b>Html5, Css, Bootstrap, Javascript, Typescript, React, Php, Laravel</b>, e <b>Meta Spark</b>, con un forte interesse e una significativa esperienza nel <b>sviluppo di filtri interattivi per Instagram</b> utilizzando grafica 2D e scripts Js. La mia passione per la tecnologia e la creatività mi guida nello sviluppo di soluzioni innovative che migliorano l'engagement e l'esperienza utente.
  <br />
  <br />
  Prima di focalizzarmi pienamente sullo sviluppo web e la grafica, ho lavorato nel settore dei contenuti digitali, gestendo progetti per brand nel settore della <b>moda</b> e <b>arredamento</b>, competenze che mi hanno permesso di affinare le mie abilità nella comunicazione visiva e nella gestione clienti. 
  <br />
  <br />Sono <b>alla ricerca di opportunità innovative</b> che mi permettano di impiegare le mie capacità tecniche e creative in un ambiente stimolante e dinamico. Se sei interessato a lavorare insieme o vuoi saperne di più sui miei progetti, non esitare a contattarmi tramite i link nel footer.
  <br />
  <br />
  Nel tempo libero, mi piace sperimentare con nuove tecnologie, migliorare le mie capacità di design, dedicarmi alla fotografia, gioco a basket e vado in bicicletta.
</p>

          
          
        </div>

        
      </div>

      <h1 className="SkillsHeading"> Hard Skills</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        {/* <Skills skill="Git" /> */}
        <Skills skill="Github" />
        {/* <Skills skill="C++" /> */}
        <Skills skill="Php" />
        <Skills skill="Laravel" />
        
      </div>
    </>
  );
};

export default About;
