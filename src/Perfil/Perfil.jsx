import React from 'react'
import foto from '../assets/foto.png'

export const Perfil = () => {
    return (
        <div className=' bg-gray-95 flex justify-center flex-grow '>
            <div className='flex w-[70vw] flex-col items-center ml-[6vw]'>
                <h1 className='mt-8 mb-8 font-sans text-orange-50 text-4xl'>
                    Jhon Edison Jurado Gomez
                </h1>

                <img src={foto} alt="Fondo" className="mb-6 rounded-full border-solid border-8 border-s-slate-900 border-e-slate-900 hover:scale-105 hover:animate-pulse " />
                <p className='text-orange-50 mb-9'>Desarollador web junior</p>
            </div>
            <p className=' text-indigo-700 text-9xl flex items-center ml-20'> = </p>
            <div className='flex items-center w-[80vw]'>
                <p className='text-orange-50 ml-16 w-[30vw]'>Soy un apasionado por la tecnología y el desarrollo de aplicativos web. Me gusta resolver problemas y crear soluciones prácticas que funcionen
                    bien y se vean ideales para el usuario. Tengo experiencia construyendo sistemas CRUD, diseñando interfaces atractivas y manejando bases de datos. Siempre estoy aprendiendo algo nuevo y me encanta trabajar en equipo para llevar proyectos al siguiente nivel. <br /> Mi objetivo es seguir creciendo como desarrollador y aportar valor a la empresa que requiera mis servicios.</p>
            </div>
        </div>

    )
}
