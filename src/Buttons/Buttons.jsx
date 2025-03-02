import React from 'react'

export const Buttons = ({children}) => {
  return (
    <button className='text-2xl text-[#dddee1] hover:mb-2 hover:border-b-2  border-b-[#5154be] hover:border-e-2 border-e-[#5154be]  w-[30vw] hover:animate-wiggle  '>{children}</button>

  )
}
