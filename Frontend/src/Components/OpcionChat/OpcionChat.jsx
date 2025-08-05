
export const OpcionChat = ({ text }) => {


  return (
    <div className="flex items-center mt-5 w-[70vw] rounded-md h-12 ml-8 border-[0.4px] border-[#cbe0f9] hover:bg-[#e5ecfb] hover:text-[#5c83f6] transform transition-transform duration-200 hover:scale-105">
      <button className="ml-5">{text}</button>
    </div>
  );
};
