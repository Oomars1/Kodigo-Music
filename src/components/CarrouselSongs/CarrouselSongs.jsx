

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules'; // importante
import 'swiper/css';
import 'swiper/css/grid';
import './CarrouselSongs.css'; // tu CSS

const novedades = [
  { title: "Papasito", autor: "KAROL G", image: "https://elavancemedia.com/wp-content/uploads/2025/06/karol-g-papacito-video.webp" },
  { title: "Espresso", autor: "Sabrina Carpenter", image: "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5" },
  { title: "Contigo", autor: "KAROL G & Tiësto", image: "https://i1.sndcdn.com/artworks-m6g23NWDcNIS3adl-71Ccfg-t500x500.jpg" },
  { title: "Santa", autor: "Lenny Tavárez", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CJ89mv_Ua4RQ44UktnrDG6DIr_esaw_XQ&s" },
  { title: "Puntería", autor: "Shakira & Cardi B", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Shakira_and_Cardi_B_-_Punter%C3%ADa.jpg/250px-Shakira_and_Cardi_B_-_Punter%C3%ADa.jpg" },
  { title: "Gatita Gangster", autor: "Villano Antillano & Álvaro Díaz", image: "https://i1.sndcdn.com/artworks-Ylye82RfHYcFE1xu-olw61A-t500x500.jpg" },
  { title: "Yandel 150", autor: "Yandel & Feid", image: "https://cdn-images.dzcdn.net/images/cover/27abf696d0605c653b11b809dacd7a3c/500x500.jpg" },
  { title: "El Amor de Mi Vida", autor: "La Adictiva", image: "https://i.scdn.co/image/ab67616d0000b27311b77a8693ac5cce83870491" },
  { title: "Luna", autor: "Feid & ATL Jacob", image: "https://i1.sndcdn.com/artworks-JpSsYnr6AKfg-0-t500x500.jpg" },
  { title: "Bandido", autor: "Myke Towers & Juhn", image: "https://cdn-images.dzcdn.net/images/cover/e08eb11580eee9678dd97ccad39b8707/0x1900-000000-80-0-0.jpg" },
  { title: "Mon Amour", autor: "Jhayco & Anitta", image: "https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/25687/zzoilo_mon_amour_remix-portada.jpg" },
  { title: "LALA", autor: "Myke Towers", image: "https://cdn-images.dzcdn.net/images/cover/c9e44eae3791dd967caedc538696887b/1900x1900-000000-80-0-0.jpg" },
  { title: "Amor Genuino", autor: "Ozuna", image: "https://i.scdn.co/image/ab67616d0000b273845eec3797eb8ca6494988d0" },
  { title: "Bailé Con Mi Ex", autor: "KAROL G", image: "https://i.scdn.co/image/ab67616d0000b2734dfc44becf424b1571986068" },
  { title: "Despechá", autor: "ROSALÍA", image: "https://image.europafm.com/clipping/cmsimages02/2022/07/28/5C9F82FB-6A1E-456C-BD0E-13042249FD92/rosalia-estrena-despecha-nueva-cancion_104.jpg?crop=1432,1432,x700,y0&width=1200&height=1200&optimize=low&format=webply" },
  { title: "No Te Enamores (Remix)", autor: "Nicky Jam & Jhayco", image: "https://i1.sndcdn.com/artworks-n9DajyJK9IabIDEZ-yVpyqg-t500x500.jpg" }
];

  

export function GridCarousel({
  spaceData,
  columnaVisible,
  columnas
}) {
  return (
    <Swiper
      modules={[Grid]}
      spaceBetween={spaceData}
      width={500}
      slidesPerView={columnaVisible} // 1 columna visible por vez
      grid={{
        rows: columnas,
        fill: 'row' // 💡 Esto fuerza el scroll horizontal por columnas
      }}
      grabCursor={true}
    >
      {novedades.map((item, i) => (
       <SwiperSlide key={i}>
  <div className="cuadro">
    <img src={item.image} alt={item.title} className="cuadro-img" />
    <div className="text-content">
      <h4>{item.title}</h4>
      <p>{item.autor}</p>
    </div>
  </div>
</SwiperSlide>
      ))}
    </Swiper>
  );
}