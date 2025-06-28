import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faRightToBracket,
  faForward,
  faBackward,
  faPlay,
  faRepeat,
  faVolumeLow,
  
  faShuffle,
  faList
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={styles.logo}>
        <FontAwesomeIcon icon={faApple} />
        Music
      </div>

      <div className={styles.player}>
        <FontAwesomeIcon icon={faShuffle} className={styles.icon} />
        <FontAwesomeIcon icon={faBackward} className={styles.icon} />
        <FontAwesomeIcon icon={faPlay} className={styles.icon} />
        <FontAwesomeIcon icon={faForward} className={styles.icon} />
        <FontAwesomeIcon icon={faRepeat} className={styles.icon} />

        <div className={styles.songInfo}>
          <FontAwesomeIcon icon={faApple} size="2x" />
        </div>

        <div className={styles.volume}>
          <FontAwesomeIcon icon={faVolumeLow} />
          <input type="range" min="0" max="100" defaultValue="50" />
        </div>

        <FontAwesomeIcon icon={faList} className={styles.icon} />
      </div>

      <Link to="/IniciarSesion" className={`${styles.singin} ${isOpen ? styles.showSignin : ""}`}>
        Iniciar sesión
      </Link>
      <Link to="/IniciarSesion" className={styles.loginButton}>
        <FontAwesomeIcon icon={faRightToBracket} /> Iniciar sesión
      </Link>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li><Link to="/" className={styles.link}>Inicio</Link></li>
        <li><Link to="/" className={styles.link}>Novedades</Link></li>
        <li><Link to="/" className={styles.link}>Radio</Link></li>
        <li><Link to="/" className={styles.link}>Buscar</Link></li>
      </ul>
    </nav>
  );
}
