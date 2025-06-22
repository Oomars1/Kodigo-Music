
import { Link } from "react-router-dom";
import styles from "./NavbarRed.module.css";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faApple } from "@fortawesome/free-brands-svg-icons"; // Ojo, este es de la categoría "brands"

export default function NavbarRed() {
//   const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.Link}>Obtén más de 100 millones de canciones gratis durante 1 mes</Link>
    </nav>
  );
}
