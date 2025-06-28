import React from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faCompass,
  faBook,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className={styles.barralateral}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faApple} /> Music
      </div>

      <div className={`${styles.search} ${styles.iconColor}`}>
        <input type="text" placeholder="Buscar..." />
      </div>

      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} className={styles.iconColor} /> Inicio
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faCompass} className={styles.iconColor} /> Novedades
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faBook} className={styles.iconColor} /> Radio
          </a>
        </li>
      </ul>

      <Link to="/IniciarSesion" className={styles.loginButton}>
        <FontAwesomeIcon icon={faRightToBracket} /> Iniciar sesión
      </Link>
    </section>
  );
}
