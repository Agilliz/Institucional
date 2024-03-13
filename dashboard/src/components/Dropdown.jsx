import React from 'react'

const Dropdown = ({ submenus }) => {
  return (
      <ul className='dropdown'>
        {submenus.map((submenu, index) => (
          <li key={index} className='menu-items'>
            <h2>{submenu.title}</h2>
          </li>
        ))}
      </ul>
    )
}

export default Dropdown