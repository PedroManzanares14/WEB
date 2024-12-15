import React, { useState } from "react";
import "../assets/css/styles.css"; // Asegúrate de importar tu CSS
import image1 from "../assets/images/Hotel1.jpeg";
import image2 from "../assets/images/Hotel2.jpg";
import image3 from "../assets/images/hotel3.jpg";

const images = [image1, image2, image3]; // Array de imágenes

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      {/* Botón para ir a la imagen anterior */}
      <button className="carousel-nav left-arrow" onClick={goToPrevious}>
        &#10094; {/* Código de flecha izquierda */}
      </button>

      {/* Imagen actual */}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Botón para ir a la siguiente imagen */}
      <button className="carousel-nav right-arrow" onClick={goToNext}>
        &#10095; {/* Código de flecha derecha */}
      </button>
    </div>
  );
};

export default Carousel;
