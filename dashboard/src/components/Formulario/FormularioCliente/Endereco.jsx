import React, { useState } from 'react'
import Input from '../Input'
import api from '../../../api'
import SelectBox from '../SelectBox'
import Button from '../../Button'
const Endereco = () => {

  const [selectedValue, setSelectedValue] = useState('');

 
  return (
    <>
      <div className=''>

                        <form>
                            <strong className='text-agilzorange'>Endereço</strong>
                            <div class="grid md:grid-cols-2 md:gap-6 pt-4">
                                <Input label="CEP" size="relative z-0 mb-5 group" />
                                <Input label="Rua" size="relative z-0 mb-5 group" />
                                <Input label="Número" size="relative z-0 mb-5 group" />
                            
                                <Input label="Complemento" />
                                <Input label="Bairro" />
                                <Input label="Cidade" />
                                <Input label="UF" />
                            </div>
                        </form>
                    </div>
    </>
  )
}

export default Endereco