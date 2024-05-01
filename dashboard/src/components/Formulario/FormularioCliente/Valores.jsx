import React, { useState } from 'react'
import Input from '../Input'
import api from '../../../api'
import SelectBox from '../SelectBox'
import Button from '../../Button'
const Valores = () => {

  const [selectedValue, setSelectedValue] = useState('');

 
  return (
    <>
      <div className='p-6'>

                        <form className='pt-8'>
                            <strong className='text-agilzorange'>Valores</strong>
                            <div class="grid md:grid-cols-2 md:gap-6 pt-4">
                                
                                <Input label="Zona normal" />
                                <Input label="Zona normal" />
                            </div>
                        </form>

                        <div className='flex'>
                            <div className='flex justify-center items-center w-full'>
                                <Button label="Salvar" color="bg-agilzorange" />
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Valores