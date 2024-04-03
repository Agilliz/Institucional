import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import api from "../api";

const Tabela = ({id, nome, setor, unidade}) => {

    function listar(){

        api.get('funcionario/', {
            auth: {
                username: 'agilizDev',
                password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
            }
        })
        .then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
<div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Nome
                </th>
                <th scope="col" class="px-6 py-3">
                    Setor
                </th>
                <th scope="col" class="px-6 py-3">
                    Unidade
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {id}
                </th>
                <td class="px-6 py-4">
                    {nome}
                </td>
                <td class="px-6 py-4">
                    {setor}
                </td>
                <td class="px-6 py-4">
                    {unidade}
                </td>
                <td class="px-6 py-4 flex justify-around w-7/12">
                    <div href="#" class="font-medium text-blue-600  hover:underline flex justify-center items-center rounded-lg">Visualizar</div>
                    <div href="#" class="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg p-2"><h2>Alterar</h2></div>
                    <div href="#" class="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg"><span className='p-2'><FaTrashCan /></span></div>
                </td>
            </tr><tr class="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {id}
                </th>
                <td class="px-6 py-4">
                    {nome}
                </td>
                <td class="px-6 py-4">
                    {setor}
                </td>
                <td class="px-6 py-4">
                    {unidade}
                </td>
                <td class="px-6 py-4 flex justify-around w-7/12">
                    <div href="#" class="font-medium text-blue-600  hover:underline flex justify-center items-center rounded-lg">Visualizar</div>
                    <div href="#" class="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg p-2"><h2>Alterar</h2></div>
                    <div href="#" class="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg"><span className='p-2'><FaTrashCan /></span></div>
                </td>
            </tr><tr class="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {id}
                </th>
                <td class="px-6 py-4">
                    {nome}
                </td>
                <td class="px-6 py-4">
                    {setor}
                </td>
                <td class="px-6 py-4">
                    {unidade}
                </td>
                <td class="px-6 py-4 flex justify-around w-7/12">
                    <div href="#" class="font-medium text-blue-600  hover:underline flex justify-center items-center rounded-lg">Visualizar</div>
                    <div href="#" class="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg p-2"><h2>Alterar</h2></div>
                    <div href="#" class="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg"><span className='p-2'><FaTrashCan /></span></div>
                </td>
            </tr><tr class="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {id}
                </th>
                <td class="px-6 py-4">
                    {nome}
                </td>
                <td class="px-6 py-4">
                    {setor}
                </td>
                <td class="px-6 py-4">
                    {unidade}
                </td>
                <td class="px-6 py-4 flex justify-around w-7/12">
                    <div href="#" class="font-medium text-blue-600  hover:underline flex justify-center items-center rounded-lg">Visualizar</div>
                    <div href="#" class="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg p-2"><h2>Alterar</h2></div>
                    <div href="#" class="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg"><span className='p-2'><FaTrashCan /></span></div>
                </td>
            </tr>
        </tbody>
    </table>


    <div className='w-1/6'>
    <button onClick={listar}>CLICA BUAMISA</button>
    </div>

</div>

  )
}

export default Tabela