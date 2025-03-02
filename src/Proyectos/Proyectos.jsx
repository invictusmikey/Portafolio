import React from 'react'
import Gaiavet from '../assets/Gaiavet.png'
import fakeStore from '../assets/fakeStore.png'

export const Proyectos = () => {
    return (
        <div className='w-[100vw]  flex flex-col items-center justify-between p-[20vh] '>
            <h1 className='mb-[10vh] text-white text-6xl'>Proyectos</h1>
            <div className='flex justify-between w-[90vw]'>
                <div>
                    <img className='w-[40vw] ' src={Gaiavet} alt="prueba 1" />
                    <p>prueba de parrafo</p>
                </div>
                <div>
                    <img className='w-[40vw]' src={fakeStore} alt="prueba 2 " />
                    <p>prueba de parrafo 2</p>
                </div>


            </div>

        </div>
    )
}
