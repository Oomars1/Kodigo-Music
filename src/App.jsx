
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import './styles.css'
import IniciarSesion from './pages/IniciarSesion/IniciarSesion.jsx'
import NewAccount from './pages/NewAccount/NewAccount'
// import Profile from './pages/Profile/Profile';
export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/NewAccount" element={<NewAccount />} />
        {/* Redirección para rutas no reconocidas */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}