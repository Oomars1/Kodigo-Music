import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

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
      <Link
        to="/IniciarSesion"
        className={`${styles.singin} ${isOpen ? styles.showSignin : ""}`}
      >
        Iniciar sesión
      </Link>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link to="/" className={styles.link}>Inicio</Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>Novedades</Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>Radio</Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>Buscar</Link>
        </li>
      </ul>

      
    </nav>
  );
}
