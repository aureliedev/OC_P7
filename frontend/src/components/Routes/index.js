import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';

function index() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/profil" exact element={<Profil />} />
      <Route path="*" exact element={<Home />} />
    </Routes>

  );
}

export default index;