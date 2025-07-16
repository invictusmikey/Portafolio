
export const ItemsS = ({image,text ,onClick, isActive}) => {

  return (
    <button onClick={onClick} className={`mt-7 flex hover:bg-slate-600 hover:animate-clearIn w-[16vw] p-4 items-center rounded-bl-lg rounded-tr-lg ${isActive ? 'hover:animate-none bg-[#3c82f7] hover:bg-[#3c82f7]  ' : '' }`}
    >
        <img className="w-5 " src={image} alt="" /><h1 className="ml-3 text-white ">{text}</h1>
    </button>
  )
}
