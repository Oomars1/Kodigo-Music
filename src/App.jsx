
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NavbarRed from './components/NavbarRed/NavbarRed';
// import Profile from './pages/Profile/Profile';
export default function App() {
  return (
    <>
      <Navbar />
      <NavbarRed />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/perfil" element={<Profile />} /> */}
        {/* Redirección para rutas no reconocidas */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}