
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login';
import GestaoClientes from './pages/GestaoClientes.jsx';
import GestaoColaboradores from './pages/GestaoColaboradores.jsx';
import Modal from './components/Modal.jsx';
import DashColaborades from './pages/Coletas/DashColetas.jsx'
function Router() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/colaboradores"} element={<GestaoColaboradores />} />
        <Route path={"/clientes-parceiros"} element={<GestaoClientes />} />
        <Route path={"/modal"} element={<Modal />} />
        
        <Route path={"/dashboard-coletas"} element={<DashColaborades />} />
    </Routes>
  );
}

export default Router;