import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <div className={styles.linksSection}>
          <a href="#">Ingles</a>
          <span>|</span>
          <a href="#">Español</a>
          <span>|</span>
          <a href="#">Aleman</a>
          <span>|</span>
          <a href="#">...</a>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>
          Copyright © {new Date().getFullYear()} <b> Apple Inc.</b> Todos los
          derechos reservados.
        </p>
      </div>
      <div className={styles.linkRow}>
        <a href="#">Términos del servicio de Internet</a>
        <span>|</span>
        <a href="#">Apple Music y la privacidad</a>
        <span>|</span>
        <a href="#">Aviso sobre cookies</a>
        <span>|</span>
        <a href="#">Soporte</a>
        <span>|</span>
        <a href="#">Comentarios</a>
      </div>
    </footer>
  );
}
