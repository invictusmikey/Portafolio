import React from 'react'
import { Buttons } from '../Buttons/Buttons'

export const Menu = () => {
    return (
        <div className='flex justify-center items-center  from-gray-700 to-gray-900 h-24 w-full shadow-md  '>
            <header className='flex flex-row justify-between w-[58vw]'>
                <div className='flex justify-between w-72'>
                    <Buttons>Perfil</Buttons>
                    <Buttons>Datos</Buttons>
                    <Buttons>Proyectos</Buttons>
                </div>

                <div className='flex justify-between w-[30vw] '>
                    <Buttons>Te contacto?</Buttons>
                    <Buttons>Contactame</Buttons>
                </div>

            </header>
        </div>
    )
}
