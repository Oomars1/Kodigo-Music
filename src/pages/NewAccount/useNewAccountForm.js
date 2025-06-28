import { useState } from 'react';

export function useNewAccountForm() {
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    usuario: '',
    contrasena: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!values.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!values.apellido.trim()) newErrors.apellido = 'Apellido requerido';

    if (!values.correo.trim()) {
      newErrors.correo = 'Correo requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
      newErrors.correo = 'Correo inválido';
    }

    if (!values.usuario.trim()) newErrors.usuario = 'Usuario requerido';
    if (!values.contrasena.trim()) {
      newErrors.contrasena = 'Contraseña requerida';
    } else if (values.contrasena.length < 6) {
      newErrors.contrasena = 'Debe tener al menos 6 caracteres';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        callback(values);
        setSubmitting(false);
      }, 1000);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
