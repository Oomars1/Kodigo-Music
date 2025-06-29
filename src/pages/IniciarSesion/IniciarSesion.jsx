// LoginForm.jsx
import React from 'react';
import { useLoginForm } from './UseLoginForm';
import { useNavigate } from 'react-router-dom';
import './IniciarSesion.css';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'; // Ajusta la ruta según tu estructura

export default function LoginForm() {
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useLoginForm();
  const navigate = useNavigate();

  // 🔽 Aquí está tu login con verificación desde Firestore
  const onLogin = async ({ email, password }) => {
    try {
      const usuariosRef = collection(db, 'usuarios');
      const q = query(
        usuariosRef,
        where('correo', '==', email),
        where('contrasena', '==', password)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        console.log("Usuario logueado:", userData);
        alert('Login exitoso');
        navigate('/');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error al verificar tus datos');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onLogin)} className="login-form">
        <h2>Iniciar Sesión</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" disabled={isSubmitting} className="login-button">
          {isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        <Link to="/" className="forgot-link">¿Olvidaste tu contraseña?</Link>
        <Link to="/NewAccount" className="forgot-link">¿No tienes Cuenta? Crea una Cuenta</Link>
      </form>
    </div>
  );
}
