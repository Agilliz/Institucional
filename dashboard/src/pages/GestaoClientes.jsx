import React, { useState } from 'react'
import TabelaClientes from '../components/Tabela/TabelaClientes'
import Button from '../components/Button'
import Modal from '../components/Modal';
import Formulario from '../components/Formulario/FormularioCliente';
function GestaoColaboradores() {

    const [openModal, setModal] = useState(false);
    return (
    <>
    <div><TabelaClientes /></div>
    <Button event={() => setModal(true)} label=" + Cadastrar cliente"/>
    <Modal isOpen={openModal} setModalOpen={() => setModal(!openModal)} conteudo={<Formulario />}/>
    </>
  )
}

export default GestaoColaboradores