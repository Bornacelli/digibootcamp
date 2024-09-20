import React from 'react';
import BootcampCardData from './BootcampCardData'; // Importa BootcampCardData en lugar de BootcampCard

const BootcampCard = () => {
  const bootcamps = [
    { title: 'Power BI', imageSrc: 'ruta_de_imagen_power_bi' },
    { title: 'Scratch', imageSrc: 'ruta_de_imagen_scratch' },
    { title: 'IA', imageSrc: 'ruta_de_imagen_ia' },
    { title: 'Ciberseguridad', imageSrc: 'ruta_de_imagen_ciberseguridad' },
    { title: 'Front-end', imageSrc: 'ruta_de_imagen_frontend' },
    { title: 'Fundamentos de Programación', imageSrc: 'ruta_de_imagen_fundamentos' },
    { title: 'React', imageSrc: 'ruta_de_imagen_react' },
    { title: 'React', imageSrc: 'ruta_de_imagen_react' }
  ];

  return (
    <div className="container">
      <h2>Bootcamps Virtuales</h2>
      <div className="grid">
        {bootcamps.map((bootcamp, index) => (
          <BootcampCardData
            key={index} 
            title={bootcamp.title} 
            imageSrc={bootcamp.imageSrc} 
          />
        ))}
      </div>
    </div>
  );
};

export default BootcampCard;
