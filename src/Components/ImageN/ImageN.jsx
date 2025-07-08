export const ImageN = ({ image, className = "" }) => {
  return (
    <button className={`w-10 mr-8 rounded-full hover:bg-slate-600 p-2 border-2 border-slate-600  ${className}`}>
      <img src={image} alt="herramientas" />
    </button>
  );
};
