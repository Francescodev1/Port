import React from 'react';
import '../App.css'; // Percorso corretto per il CSS
import triangleImage from '../images/triangle.png'; // Importa l'immagine

const Triangle = ({ rotateClockwise }) => {
  const rotationClass = rotateClockwise ? 'rotate-clockwise' : 'rotate-counterclockwise';

  return (
    <img 
      src={triangleImage} 
      alt="triangle" 
      className={`triangle ${rotationClass}`} 
    />
  );
};

export default Triangle;
