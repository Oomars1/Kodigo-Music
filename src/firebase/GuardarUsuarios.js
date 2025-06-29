

// src/firebase/guardarUsuario.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const guardarUsuario = async (usuario) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), usuario);
    return docRef.id;
  } catch (error) {
    console.error("Error guardando usuario:", error);
    throw error;
  }
};