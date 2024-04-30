
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import GestaoClientes from './pages/GestaoClientes.jsx';
import GestaoColaboradores from './pages/GestaoColaboradores.jsx';

function Router() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/colaboradores"} element={<GestaoColaboradores />} />
        <Route path={"/clientes-parceiros"} element={<GestaoClientes />} />
    </Routes>
  );
}

export default Router;