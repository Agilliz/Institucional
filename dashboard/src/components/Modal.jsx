import React from 'react'

const Modal = ({ isOpen, conteudo }) => {

    if (isOpen) {
        return (
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 '>
                <div className='fixed top-24 left-64 transform translate-x-1/2 transform-y-1/2 bg-white w-1/3 rounded-lg'>
                    {conteudo}
                </div>
            </div>
        )
    }

    return null;


}

export default Modal