import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';

function index() {
  return (
    <Routes>
      <Route path="/feed" exact element={<Home />} />
      <Route path="/profil" exact element={<Profil />} />
      <Route path="*" exact element={<Profil />} /> {/* Redirection profilLog */}
    </Routes>

  );
}

export default index;