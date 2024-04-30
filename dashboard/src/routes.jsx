
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import GestaoClientes from './pages/GestaoClientes.jsx';

function Router() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/clientes-parceiros"} element={<GestaoClientes />} />
    </Routes>
  );
}

export default Router;