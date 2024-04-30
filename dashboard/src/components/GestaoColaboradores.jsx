import React from 'react';
import { IoIosSearch } from "react-icons/io";
import Tabela from './Tabela';
import CadastroColaboradores from './Container';

const GestaoColaboradores = () => {
  return (
    <div className='h-full w-full'>
        <div className='flex pt-8'>
            <h2 className='w-1/2 pl-8'>Mural de Colaboradores</h2>
            <div className='w-1/2 flex justify-end pr-8'>
            <input className='w-4/6 bg-slate-200 rounded-lg input' type="text" placeholder='Colaborador...' />
            </div>
        </div>
        <Tabela /> 

        
    </div>
  )
}

export default GestaoColaboradores