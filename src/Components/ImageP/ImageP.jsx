import React from 'react'

export const ImageP = ({image}) => {
  return (
    <button className=''>
        <img className=" shadow-black w-24 h-24 rounded-full" src={image} alt="imagenes" />
    </button>
  )
}
