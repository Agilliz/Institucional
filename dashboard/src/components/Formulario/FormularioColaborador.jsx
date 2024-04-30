import React, { useState } from 'react'
import Input from './Input'
import api from '../../api'
import SelectBox from './SelectBox'
import Button from '../Button'

function FormularioColaborador() {
    
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    { value: 'entregador', label: 'Entregador' },
    { value: 'coletor', label: 'Coletor' },
    { value: 'gestor', label: 'Gestor' },
    { value: 'financeiro', label: 'Financeiro' },
    { value: 'suporte', label: 'Suporte' },
  ];

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className='p-6'>
                        <div className='w-1/2'>
                            <SelectBox label="Tipo colaborador" options={options} value={selectedValue} onChange={handleChange} />
                        </div>

                        <form className='pt-8'>
                            <h2 className='text-agilzorange'>Dados pessoais</h2>
                            <div class="grid md:grid-cols-2 md:gap-6 pt-4">
                                <Input label="Nome completo" size="relative z-0 mb-5 group" />
                                <Input label="RG" size="relative z-0 mb-5 group" />
                                <Input label="CPF" size="relative z-0 mb-5 group" />
                            
                                <Input label="Data Nascimento" />
                                <Input label="Telefone" />
                                <Input label="Tipo CNH" />
                            </div>
                        </form>

                        <div className='flex'>
                            <div className='flex justify-center items-center w-full'>
                                <Button label="Cadastrar" color="bg-agilzorange" />
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default FormularioColaborador