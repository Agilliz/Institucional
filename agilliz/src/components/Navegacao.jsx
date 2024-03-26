import React from 'react'
import Logo from './brand/Logo'

const Navegacao = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} className='nav'>
      <Logo/>
        <ul style={{display: 'flex', justifyContent: 'space-around', width: "50%", fontWeight: "600"}}>
              <li>Sobre nós</li>
              <li>Modo de Operação</li>
              <li>Benefícios e vantagens</li>
              <li>Contato</li>
        </ul>
      
      
    </div>
  )
}

export default Navegacao
