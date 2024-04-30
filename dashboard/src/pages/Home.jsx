import React from 'react'
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Pesquisa';
import PeriodoCalendario from '../components/PeriodoCalendario';
import Modal from '../components/Modal';

function Home() {


    return (
    <div className='pl-4 pt-4 w-full'>
        <Titulo titulo="Acompanhamento" componente={<PeriodoCalendario />} />
        <Modal />
    </div>
  )
}

export default Home;