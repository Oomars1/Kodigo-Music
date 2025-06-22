

// src/pages/Home/Home.jsx
import React from 'react';
import './Home.module.css';
import { CarrouselNovedades } from '../../components/CarrouselNovedades/CarrouselN';
import { GridCarousel } from '../../components/CarrouselSongs/CarrouselSongs';

 function Home() {
  return (
    <main className="home">
      <h1>Novedades</h1>
      <hr/>
      <CarrouselNovedades/>
      <h2>Canciones recien llegadas</h2>
      <hr/>
      <GridCarousel/>
       <hr/>
      {/* agregar más secciones: carrusel, listas, footer... */}
    </main>
  );
}

export default Home;