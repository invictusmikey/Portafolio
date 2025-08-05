import React from 'react'

export const ImageP = ({image,changePage}) => {
  return (
    <button onClick={changePage}>
        <img className=" shadow-black w-24 h-24 rounded-full" src={image} alt="imagenes" />
    </button>
  )
}
