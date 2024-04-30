import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/institucional/Home";
import TelaColaborador from "./pages/telaColaborador/TelaColaborador"


function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tela-colaborador" element={<TelaColaborador/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
