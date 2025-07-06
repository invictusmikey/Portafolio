
export const ItemsS = ({image,text}) => {
  return (
    <button className='mt-7 flex hover:bg-slate-600 w-[20vw] p-4 items-center rounded-bl-lg rounded-tr-lg'>
        <img className="w-5 " src={image} alt="" /><h1 className="ml-3 text-white">{text}</h1>
    </button>
  )
}
