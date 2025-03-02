import React from 'react'
import { Menu } from '../Menu/Menu'
import { Perfil } from '../Perfil/Perfil'
import { Proyectos } from '../Proyectos/Proyectos'

export const Section = () => {
  return (
    <div className='w-[100vw] flex flex-col bg-[#121212] '>
      <Menu />        
      <Perfil/>
      <Proyectos />


    </div>
  )
}
