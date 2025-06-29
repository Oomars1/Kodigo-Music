import React from 'react';
import { useNewAccountForm } from './useNewAccountForm';
import { useNavigate } from 'react-router-dom';
import './NewAccount.css';
import { Link } from 'react-router-dom';
import { guardarUsuario } from '../../firebase/GuardarUsuarios'; // Asegúrate que la ruta esté correcta


export default function NewAccount() {
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useNewAccountForm();
  const navigate = useNavigate();

  const onRegister = async (data) => {
    try {
      await guardarUsuario(data);
      alert('Cuenta creada con éxito');
      navigate('/');
    } catch (error) {
      alert('Error al crear la cuenta. Intenta de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onRegister)} className="login-form">
        <h2>Crear Cuenta</h2>

        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'input-error' : ''}
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={values.apellido}
            onChange={handleChange}
            className={errors.apellido ? 'input-error' : ''}
          />
          {errors.apellido && <span className="error">{errors.apellido}</span>}
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={values.correo}
            onChange={handleChange}
            className={errors.correo ? 'input-error' : ''}
          />
          {errors.correo && <span className="error">{errors.correo}</span>}
        </div>

        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            name="usuario"
            value={values.usuario}
            onChange={handleChange}
            className={errors.usuario ? 'input-error' : ''}
          />
          {errors.usuario && <span className="error">{errors.usuario}</span>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contrasena"
            value={values.contrasena}
            onChange={handleChange}
            className={errors.contrasena ? 'input-error' : ''}
          />
          {errors.contrasena && <span className="error">{errors.contrasena}</span>}
        </div>

        <button type="submit" disabled={isSubmitting} className="login-button">
          {isSubmitting ? 'Creando...' : 'Crear Cuenta'}
        </button>

        <Link to="/IniciarSesion" className="forgot-link">
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </form>
    </div>
  );
}
