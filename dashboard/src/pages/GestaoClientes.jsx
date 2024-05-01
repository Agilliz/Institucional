import React, { useState } from 'react'
import TabelaClientes from '../components/Tabela/TabelaClientes'
import Button from '../components/Button'
import Modal from '../components/Modal';
import FormularioCliente from '../components/Formulario/FormularioCliente/FormularioCliente';
function GestaoColaboradores() {

    const [openModal, setModal] = useState(false);
    return (
    <>
    <div><TabelaClientes /></div>
    <div className='fixed bottom-3.5 right-3.5'>
    <Button onClick={() => setModal(true)} label=" + Cadastrar cliente"/>
    </div>

    <Modal isOpen={openModal} setModalOpen={() => setModal(!openModal)} conteudo={<FormularioCliente />}/>
    </>
  )
}

export default GestaoColaboradores