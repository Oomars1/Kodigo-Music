import React from 'react';
import { useLoginForm } from './UseLoginForm';
import { useNavigate } from 'react-router-dom';
import './IniciarSesion.css'; // Asegúrate de importar el CSS
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useLoginForm();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    const user = {
      email: 'test@correo.com',
      password: '123456',
    };

    if (email === user.email && password === user.password) {
      alert('Login exitoso');
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
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
