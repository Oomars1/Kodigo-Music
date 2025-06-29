// src/pages/Home/Home.jsx
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import sty from "./MasEscuchado.module.css";
import style from "./StylesNovedades.module.css";

import { GridCarousel } from "../../components/CarrouselSongs/CarrouselSongs";
import { CarruselGeneral } from "../../components/Carruselgeneral/Carrusel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavbarRed from "../../components/NavbarRed/NavbarRed";
import Sidebar from "../../components/Sidebar/SideBar";

import { leerColeccionLista } from "../../firebase/LeerColeccionLista";

function Home() {
  const [novedades, setNovedades] = useState([]);
  const [masEscuchado, setMasEscuchado] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      const datosNovedades = await leerColeccionLista("novedades");
      const datosMasEscuchado = await leerColeccionLista("masEscuchado");

      setNovedades(datosNovedades);
      setMasEscuchado(datosMasEscuchado);
    };

    cargarDatos();
  }, []);

  return (
    <body>
      <Navbar />
      <NavbarRed />
      <main className={styles.home}>
        <section className={styles.todo}>
          <Sidebar />
          <section className={styles.contenido}>
            <section className={styles.divisor}>
              <h1>Novedades</h1>
              <hr />
              <CarruselGeneral
                datos={masEscuchado}
                imagenPrimero={false}
                showOverlay={true}
                styles={style}
              />

              <h2>Canciones recien llegadas</h2>
              <hr />
              <GridCarousel spaceData={5} columnaVisible={2} columnas={4} />

              <h2>Todo el mundo esta escuchando...</h2>
              <hr />
              <CarruselGeneral
                datos={novedades}
                imagenPrimero={true}
                showOverlay={false}
                styles={sty}
              />

              <h2>Nuevos Lanzamientos</h2>
              <hr />
              <GridCarousel spaceData={3} columnaVisible={2} columnas={2} />
            </section>
            <Footer />
          </section>
        </section>
      </main>
    </body>
  );
}

export default Home;
