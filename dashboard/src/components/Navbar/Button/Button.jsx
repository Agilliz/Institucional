import React from 'react';

const Button = ({children}) => {
  return (
    <div className='w-full h-12 rounded-lg font-sans font-bold ' id='button'>
        <button onClick={irParaSelecionado} className='h-full w-full flex justify-center items-center'>
          {children}
        </button>
    </div>
  )
}


function irParaSelecionado(){
    const div = document.getElementById('button');
    if (div.classList.contains('bg')) {
      div.classList.remove('bg-agilzorange')
    } else {
      div.classList.add('bg-agilzorange');
      div.classList.add('text-[#FFFFFF]')
    }

}




export default Button