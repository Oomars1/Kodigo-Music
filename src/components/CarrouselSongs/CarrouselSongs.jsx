import { useState, useEffect } from "react";
import { leerCanciones } from "../../firebase/LeerCanciones"; // Ajusta ruta
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "./CarrouselSongs.css";

export function GridCarousel({ spaceData, columnaVisible, columnas }) {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    const fetchCanciones = async () => {
      const data = await leerCanciones();
      console.log("Canciones Firestore:", data);  // <--- Verifica aquí
      setCanciones(data);
    };

    fetchCanciones();
  }, []);

  if (canciones.length === 0) {
    return <p>Cargando canciones...</p>;
  }

  return (
    <Swiper
      modules={[Grid]}
      spaceBetween={spaceData}
      slidesPerView={columnaVisible}
      grid={{ rows: columnas, fill: "row" }}
      grabCursor={true}
    >
      {canciones.map((item, i) => (
        <SwiperSlide key={item.id || i} className="miSlidePersonalizado">
          <div className="cuadro">
            <img src={item.image} alt={item.title} className="cuadro-img" />
            <div className="text-content">
              <h4>{item.title}</h4>
              <p>{item.autor}</p>
            </div>
            <span className="menu-icon">⋯</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
