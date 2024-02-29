import React from 'react'
import { FaBars } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";

const TopNavbar = ({children, id}) => {
  return (
    <>
    <div name="gestao-de-coletas" className="h-1/6 flex items-center w-4/5">
              <ul className="w-full flex">
                <li className="flex justify-center items-center"><FaBars /></li>
                <li className="pl-12"><h2>Gestão de Coletas</h2></li>
              </ul>
            </div>
            <div className="w-1/5 flex justify-end">
              <ul className="flex">
                <li className='flex items-center'><MdNotifications /></li>
                <li className='flex items-center'><TbUserSquareRounded /></li>
                <li><span><h1>{children}</h1> <h4>ID: {id}</h4></span></li>
              </ul>
            </div>
    </>
  )
}

export default TopNavbar