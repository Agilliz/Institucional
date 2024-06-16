import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/institucional/Home";
import TelaColaborador from "./pages/telaColaborador/TelaColaborador"
import TelaContratar from "./pages/telaContratarServico/TelaContratar"


function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tela-colaborador" element={<TelaColaborador/>} />
          <Route path="/tela-contratar/" element={<TelaContratar/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
