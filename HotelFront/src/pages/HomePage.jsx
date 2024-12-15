import React from 'react';
import Carousel from '../components/Carousel';
import '../assets/css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido al Hotel</h1>
      <p>Descubre nuestras habitaciones y servicios exclusivos.</p>
      <Carousel />
    </div>
  );
};

export default HomePage;
