import React, { useState } from 'react';

const Button = ({children}) => {
 

  return (
    <div className='w-full h-8 rounded-lg font-sans font-bold text-sm 'id='button'>
        <button className='h-full w-full flex justify-center items-center button'>
          {children}
        </button>
    </div>
  )
}





export default Button