import React from 'react'

const Input = (props) => {
  return (
    <>
        <h1 className='text-neutral-500'>{props.label}</h1>
        <input type="text" className='border-b-2 outline-none text-neutral-800'/>
    </>
    
    
  )
}

export default Input