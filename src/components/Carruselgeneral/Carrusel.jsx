import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CarruselGeneral({
  datos,
  imagenPrimero = false,
  showOverlay = false,
  styles,
}) {
  return (
    <Swiper spaceBetween={2} slidesPerView={"auto"} grabCursor={true}>
      {datos.map((item, index) => (
        <SwiperSlide key={index} className={styles.miSlidePersonalizado}>
          <div className={styles.card}>
            {/* Imagen primero */}
            {imagenPrimero && (
              <div className={styles.imgContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImg}
                />
                {showOverlay && (
                  <div className={styles.overlayText}>{item.texto}</div>
                )}
              </div>
            )}

            {/* Texto (orden condicional) */}
            <div className={styles.cardText}>
              {imagenPrimero ? (
                <>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </>
              ) : (
                <>
                  <p>{item.subtitle}</p>
                  <h4>{item.title}</h4>
                </>
              )}
              {item.autor && <h3>{item.autor}</h3>}
            </div>

            {/* Imagen después */}
            {!imagenPrimero && (
              <div className={styles.imgContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImg}
                />
                {showOverlay && (
                  <div className={styles.overlayText}>{item.texto}</div>
                )}
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
