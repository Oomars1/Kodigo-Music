// src/pages/Home/Home.jsx
import React from "react";
import styles from "./Home.module.css";
import { GridCarousel } from "../../components/CarrouselSongs/CarrouselSongs";
import sty from "./MasEscuchado.module.css";
import style from "./StylesNovedades.module.css";
import { CarruselGeneral } from "../../components/Carruselgeneral/Carrusel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavbarRed from "../../components/NavbarRed/NavbarRed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/SideBar";
// import { useEffect } from "react";
// import { subirNovedades } from "../../subirNovedades";



function Home() {
  // useEffect(() => {
  //   subirNovedades(); // 👈 Ejecuta solo una vez al entrar
  // }, []);

  const masEscuchado = [
    {
      title:
        "Reserva F1® The Album Y descubre las historias de la banda sonora ",
      autor: "",
      subtitle: "NUEVAS CANCIONES + PROXIMO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/48/d6/c8/48d6c89f-bfac-1779-867a-1af0ce4bd889/source/2400x600bb.webp",
      texto: "",
    },
    {
      title: "Tropicoquet",
      autor: "Karol G",
      subtitle: "Nuevo álbum",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/02/67/32/026732fb-01ab-4e64-e9f5-1198dd19feb6/dd88f47e-09b9-42c4-a783-f1d2252c5135.png/480x275sr.webp",
      texto:
        "Una carta de amor a sus raices latinas a ritmo de salsa, mambo y merengue",
    },
    {
      title: "afroLOVA 25'",
      autor: "Rels B",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/3b/9e/af/3b9eafd0-03f8-9fea-04f9-fe30c05ea32e/28456c41-1241-41bf-8351-3658bf8fb8ae.png/480x275sr.webp",
      texto: "El Mediterraneo y el Caribe se encuentran en playas imaginadas",
    },
    {
      title: "NATSUKASHI",
      autor: "SAIKO",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      autor: "SAIKO",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      autor: "SAIKO",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      autor: "SAIKO",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      autor: "SAIKO",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      autor: "SAIKO",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
  ];

  const novedades = [
    {
      title: "Lerica: imprencindibles ",
      subtitle: "Apple Music Pop en español",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/48/d6/c8/48d6c89f-bfac-1779-867a-1af0ce4bd889/source/2400x600bb.webp",
      texto: "",
    },
    {
      title: "Tropicoquet",
      subtitle: "Nuevo álbum",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/02/67/32/026732fb-01ab-4e64-e9f5-1198dd19feb6/dd88f47e-09b9-42c4-a783-f1d2252c5135.png/480x275sr.webp",
      texto:
        "Una carta de amor a sus raices latinas a ritmo de salsa, mambo y merengue",
    },
    {
      title: "afroLOVA 25'",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/3b/9e/af/3b9eafd0-03f8-9fea-04f9-fe30c05ea32e/28456c41-1241-41bf-8351-3658bf8fb8ae.png/480x275sr.webp",
      texto: "El Mediterraneo y el Caribe se encuentran en playas imaginadas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
    {
      title: "NATSUKASHI",
      subtitle: "NUEVO ALBUM",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1f/b7/de/1fb7de40-1d0f-1e94-6ffd-76eb9096429a/daae4876-6076-406a-98fb-84ecb2260801.png/600x344sr.webp",
      texto:
        "Un autorretrato de aire melancolico e influencias transatlanticas",
    },
  ];

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
              {/* <CarrouselNovedades /> */}
              <h2>Canciones recien llegadas</h2>
              <hr />
              <GridCarousel spaceData={5} columnaVisible={2} columnas={4} />
              <hr />
              <h2>Todo el mundo esta escuchando...</h2>
              <hr />
              {/* <CarruselMasEscuchado /> */}
              {/* agregar más secciones: carrusel, listas, footer... */}
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
