import React, { useState } from 'react'
import Input from './Formulario/Input'
import api from '../api'
import SelectBox from './Formulario/SelectBox'
import Button from './Button'
const Formulario = () => {

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
      <strong className='p-6 flex text-agilzorange'>
        Cadastro de colaborador
      </strong>
      <div className='w-1/6 pl-6 text-agilzblue'>
        <SelectBox label="Tipo de colaborador" options={options} value={selectedValue} onChange={handleChange} />
      </div>

      <form className="pl-6 pb-3 pt-3">
        <h2 className='text-agilzblue'>Dados empresariais</h2>
        <div class="grid md:grid-cols-5 md:gap-6 pt-4">
          <Input label="Razão social" size="relative z-0 mb-5 group" />
          <Input label="Nome fantasia" size="relative z-0 mb-5 group" />
          <Input label="CNPJ" size="relative z-0 mb-5 group" />
        </div>
        <div class="grid md:grid-cols-5 md:gap-6 ">
          <Input label="CEP" />
          <Input label="Cidade" />
          <Input label="Bairro" />
          <Input label="Rua" />
          <Input label="Número" size="relative w-1/2 z-0 mb-5 group" />
        </div>
      </form>
      <form className="pl-6 pb-3">
        <h2 className='text-agilzblue'>Dados veículo</h2>
        <div class="grid md:grid-cols-5 md:gap-6 pt-4">
          <Input label="Tipo veículo" size="relative z-0 mb-5 group" />
          <Input label="Marca" size="relative z-0 mb-5 group" />
          <Input label="Modelo" size="relative z-0 mb-5 group" />
          <Input label="Placa" size="relative z-0 mb-5 group" />
        </div>
      </form>
      <div className='flex'>

      
      <form className="pl-6 pb-3 w-3/4">
        <h2 className='text-agilzblue'>Precificação de entrega</h2>
        <div class="grid md:grid-cols-2 md:gap-6 pt-4">
        <div class="relative w-1/2 z-0 mb-5 group flex flex-col justify-center items-center">
        <label for="floating_email" class="peer-focus:font-medium text-sm text-agilzblue duration-300 ">Zona normal</label>
          <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-agilzorange focus:outline-none focus:ring-0 focus:border-agilzorange peer" placeholder="R$" required />
        </div>
        <div class="relative w-1/2 z-0 mb-5 group flex flex-col justify-center items-center">
        <label for="floating_email" class="peer-focus:font-medium text-sm text-agilzblue duration-300 ">Zona nova</label>
          <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-agilzorange focus:outline-none focus:ring-0 focus:border-agilzorange peer" placeholder="R$" required />
        </div>
    
        </div>
      </form>
      <div className='flex justify-center items-center w-full'>
      <Button label="Documentos" color="bg-agilzblue" />
        <Button label="Cadastrar" color="bg-agilzorange"/>
      </div>
      </div>
    </>
  )
}

export default Formulario