import React from 'react';
import Triangle from './Triangle.jsx';
import '../App.css'; // Percorso corretto

const Background = () => {
  const rows = 10;
  const trianglesPerRow = 20;
  const triangleElements = [];

  for (let i = 0; i < rows; i++) {
    const rotateClockwise = i % 2 === 0; // Alterna rotazione tra le file
    for (let j = 0; j < trianglesPerRow; j++) {
      triangleElements.push(
        <Triangle key={`${i}-${j}`} rotateClockwise={rotateClockwise} />
      );
    }
  }

  return (
    <div className="background">
      {triangleElements}
    </div>
  );
};

export default Background;
