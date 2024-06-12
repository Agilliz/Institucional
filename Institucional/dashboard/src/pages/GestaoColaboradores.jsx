import React, { useState } from 'react'
import TabelaColaborador from '../components/Tabela/TabelaColaborador';
import Button from '../components/Button'
import Modal from '../components/Modal';
import FormularioColaborador from '../components/Formulario/FormularioColaborador/FormularioColaborador';
import Input from '../components/Formulario/Input';
const GestaoColaboradores = () => {
  
  const [openModal, setModal] = useState(false);

  return (
    
    <>
        <div className='flex pt-8'>
            <strong className='w-1/2 pl-8 text-agilzorange'>Mural de Colaboradores</strong>
            <div className='w-1/2 flex justify-end pr-8'>

            </div>
        </div>
        <TabelaColaborador /> 
        <div className='fixed bottom-3.5 right-3.5'>
        <Button onClick={() => setModal(true)} label=" + Cadastrar colaborador"/>
        </div>
        <Modal isOpen={openModal} setModalOpen={() => setModal(!openModal)} conteudo={<FormularioColaborador />} />

        
    </>
  )
}

export default GestaoColaboradores