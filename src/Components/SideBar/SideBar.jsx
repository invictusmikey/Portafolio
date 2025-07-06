import { ImageP } from "../ImageP/ImageP";
import perfil from "../../assets/Perfil.jpg";
import msjicon from "../../assets/msjicon.png";
import personaicon from "../../assets/personaicon.png";
import carpetaicon from "../../assets/carpetaicon.png";
import mensajeicon from "../../assets/mensajeicon.png";
import { ItemsS } from "../ItemsS/ItemsS";

export const SideBar = () => {
  return (
    <div className="bg-gradient-to-tr from-[#20283d] to-[#00030a] w-[25vw] h-[115vh]  p-9">
      <ImageP image={perfil} />
      <h4 className="mt-2 text-[#afb2bc]">Desarrollador web junior</h4>
      <div className="flex flex-col justify-between h-[30vh]"> 
        <ItemsS image={msjicon} text={"Iniciar chat"} />
        <ItemsS image={personaicon} text={"Sobre mi"} />
        <ItemsS image={carpetaicon} text={"Proyectos"} />
        <ItemsS image={mensajeicon} text={"Contacto"} />
        <hr className="mt-[40vh] border-2"/>
      <div className="mt-6">
        <p className="text-white text-md">Diseñado por jhon jurado ©</p>
      </div>
      </div>
    </div>
  );
};
