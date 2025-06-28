import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const leerCanciones = async () => {
  const docRef = doc(db, "canciones", "lista"); // la colección y el id del doc
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().items || [];
  } else {
    console.log("No existe el documento canciones/lista");
    return [];
  }
};
