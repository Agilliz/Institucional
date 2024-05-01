import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import StepContext from './Formulario/FormularioCliente/StepContext';

const Modal = ({ isOpen, setModalOpen, conteudo }) => {

    if (isOpen) {
        return (
            
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 '>
                    <div className='fixed top-24 left-64 transform translate-x-1/2 transform-y-1/2 bg-white w-1/3 rounded-lg'>
                    <StepContext>
                        <div className='p-4'>
                        <span className='fixed left-full cursor-pointer transform -translate-x-full p-4' onClick={setModalOpen}><AiOutlineClose /></span>
                        {conteudo}

                        </div>
                    </StepContext>
                    </div>
                </div>

        )
    }

    return null;


}

export default Modal