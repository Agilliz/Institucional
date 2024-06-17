import React from 'react'
import Logo from '../brand/Logo'
import { useNavigate } from 'react-router-dom';
import styles from './Navegacao.module.css';

const Navegacao = () => {
  const navigate = useNavigate();
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} className='nav'>
      <Logo/>
        <ul style={{display: 'flex', justifyContent: 'space-around', width: "55%", fontWeight: "600", alignItems: 'center'}}>
              <li>Sobre nós</li>
              <li>Modo de Operação</li>
              <li>Benefícios e vantagens</li>
              <li>Contato</li>
              <button onClick={() => navigate('/login')}  className={styles.button}>
                <div className={styles['motoqueiro']}>
                </div>
                <h1>Entrar</h1>
              </button>
        </ul>
      
      
    </div>
  )
}

export default Navegacao
