import React, { useState } from 'react';
import api from '../../../api';
import FormularioCliente from './FormularioCliente';
import transformarData from '../../../utils/globals';
import { toast } from 'react-toastify';
export const multiStepContext = React.createContext();
 const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);  

    function submitData() {
      setFinalData(finalData=>[...finalData, userData]);

      //FAZER O POST AQUI
      api.post('http://localhost:8080/unidade/cadastrar', {
        auth: {
            username: 'agilizDev',
            password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
        },
        body: {
          unidadeDTO: userData
        }
      })
      .then((res) => {
          toast.success('sucesso total');
          console.log(res);
      })
      .catch((error) => {
          toast.error('burrinho');
          console.log(error);
      })
      .finally(() => {
        setUserData([]);
        setStep(1);
      });

    }

    return (
      <div>
        <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}} >
          <FormularioCliente />
        </multiStepContext.Provider>
      </div>
    )
}
export default StepContext;