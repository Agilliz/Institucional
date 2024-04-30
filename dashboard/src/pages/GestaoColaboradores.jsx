import React, { useState } from 'react'
import Tabela from '../components/Tabela'
import Button from '../components/Button'
import Modal from '../components/Modal';
import Formulario from '../components/Formulario';
function GestaoColaboradores() {

    const [openModal, setModal] = useState(false);
    return (
    <>
    <div><Tabela /></div>
    <Button event={() => setModal(true)} label="Cadastrar cliente"/>
    <Modal isOpen={openModal} conteudo={<Formulario />}/>
    </>
  )
}

export default GestaoColaboradores