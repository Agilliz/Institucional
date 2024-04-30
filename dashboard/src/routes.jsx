
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import MuralColaboradores from './pages/MuralColaboradores.jsx';
import Formulario from './components/Formulario.jsx';
import GestaoColaboradores from './pages/GestaoColaboradores.jsx';

function Router() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/mural-colaboradores"} element={<MuralColaboradores />} />
        <Route path={"/cadastro-colaboradores"} element={<Formulario />} />
        <Route path={"/gestao-colaboradores"} element={<GestaoColaboradores />} />
    </Routes>
  );
}

export default Router;