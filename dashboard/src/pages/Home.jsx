import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
    <div className=''>
    <h2>
        Bem-vindo ao <span className='text-orange-600 font-semibold'>Agil Logistics</span>  
    </h2>

    <h2>
        Bem-vindo ao Agil Logistics

        Parabéns! Com o Agil Logistics, você terá o controle total das suas operações, alcançando eficiência máxima e resultados extraordinários. Nossa plataforma intuitiva e completa permite que você otimize processos, reduza custos e tome decisões estratégicas embasadas em dados concretos.
        Através do Agil Logistics, você terá uma visão completa e em tempo real de todas as etapas do processo logístico, do recebimento ao envio, garantindo uma gestão logística eficiente e sem complicações. Além disso, nosso sistema integra todas as áreas da sua empresa, facilitando a comunicação entre departamentos e agilizando os fluxos de trabalho.

        Junte-se a nós e descubra o poder da logística na palma da sua mão!

        Equipe Agil Logistics
    </h2>
    <button onClick={() => navigate("/login")}>Ir para a home</button>
    </div>
  )
}

export default Home;