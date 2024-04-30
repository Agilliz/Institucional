import React from 'react'
import { useNavigate } from "react-router-dom";
import Tabela from "../components/Tabela";
function MuralColaboradores() {
    const navigate = useNavigate();
    
  return (
    
    <>
     <Tabela />
     <button onClick={() => navigate("/")}>Home</button>   
    </>
  )
}

export default MuralColaboradores