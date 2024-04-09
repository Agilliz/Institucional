import React from 'react'
import logo from '../../images/logo-nome-svg.svg'

const Logo = () => {
  return (
    <div className='w-70 h-50 flex justify-center'>
    <img src={logo} alt="" style={{width: "70%", marginTop: '2%'}}/>
    </div>
  )
}

export default Logo