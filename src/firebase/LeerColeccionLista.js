// src/firebase/leerColeccionLista.js
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// coleccion: "novedades", "masEscuchado", etc.
export const leerColeccionLista = async (coleccion) => {
  const docRef = doc(db, coleccion, "lista");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().items || [];
  } else {
    console.warn(`No existe el documento ${coleccion}/lista`);
    return [];
  }
};