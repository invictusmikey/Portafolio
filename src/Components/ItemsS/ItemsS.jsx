export const ItemsS = ({image, text, onClick, isActive}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-7 flex w-[16vw] p-4 items-center rounded-bl-lg rounded-tr-lg
        ${isActive
          ? 'bg-[#3c82f7] hover:bg-[#3c82f7]' 
          : 'hover:bg-slate-600 hover:animate-clearIn'
        }`
      }
    >
      <img className="w-5" src={image} alt="" />
      <h1 className="ml-3 text-white">{text}</h1>
    </button>
  );
}
