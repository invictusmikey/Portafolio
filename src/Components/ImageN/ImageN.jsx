
export const ImageN = ({ image, className = "" ,onclick}) => {

  
  
  return (
    <div className="flex flex-row">
      <button
      onClick={onclick}
        className={`w-10 mr-8 rounded-full hover:bg-slate-600 p-2 border-2 border-slate-600  ${className}`}
        aria-label="Cambiar tema"
        ><img src={image} alt="" /></button>

    </div>
      
  );
};
