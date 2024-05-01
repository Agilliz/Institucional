import React, { useState } from 'react';
import DadosEmpresariais from './DadosEmpresariais'
import Endereco from './Endereco'
import Valores from './Valores'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function FormularioCliente() {

    const [passoAtual, setPassoAtual] = useState(1);
    const totalPassos = 3;
  
    const proximaPagina = () => {
        if (passoAtual < totalPassos) {
          setPassoAtual(passoAtual + 1);
        }
      };
    
      const paginaAnterior = () => {
        if (passoAtual > 1) {
          setPassoAtual(passoAtual - 1);
        }
      };

      const enviarFormulario = () => {
        console.log("teste");
      }


      const renderizarConteudo = () => {
        switch (passoAtual) {
          case 1:
            return (
              <div className='p-4'>
                <DadosEmpresariais />
                <span className='flex justify-between'>
                    <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                    <FaChevronLeft /> 
                    </IconContext.Provider>
                    <span onClick={proximaPagina}>
                    <FaChevronRight />
                        
                    </span>
                </span>
              </div>
            );
          case 2:
            return (
                <div className='p-4'>
                <Endereco />
                    <span className='flex justify-between'>
                    <span onClick={paginaAnterior}>
                    <FaChevronLeft /> 
                    </span>

                    <span onClick={proximaPagina}>
                    <FaChevronRight />
                    </span>
                </span>
              </div>
            );
          case 3:
            return (
                <div className='p-4'>
                <Valores />
                <span className='flex justify-between'>
                    <span onClick={paginaAnterior}>
                    <FaChevronLeft /> 
                    </span>
                    <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                    <span onClick={proximaPagina}>
                    <FaChevronRight />
                    </span>
                    </IconContext.Provider>
                        
                </span>
              </div>
            );
          default:
            return null;
        }
      };
    
      return (
        <div className="modal">
          <div className="modal-content">
            {renderizarConteudo()}
          </div>
        </div>
      );
    };


export default FormularioCliente