import { ImageP } from "../ImageP/ImageP";
import perfil from "../../assets/Perfil.jpg";
import msjicon from "../../assets/msjicon.png";
import personaicon from "../../assets/personaicon.png";
import carpetaicon from "../../assets/carpetaicon.png";
import mensajeicon from "../../assets/mensajeicon.png";
import { ItemsS } from "../ItemsS/ItemsS";

export const SideBar = () => {
  return (
    <div className="bg-[#20283d] w-[25vw] h-[100vh]  p-9">
      <ImageP image={perfil} />
      <h4 className="mt-2 text-[#afb2bc]">Desarrollador web junior</h4>
      <div className="flex flex-col justify-between "> 
        <ItemsS image={msjicon} text={"Iniciar chat"} />
        <ItemsS image={personaicon} text={"Sobre mí"} />
        <ItemsS image={carpetaicon} text={"Proyectos"} />
        <ItemsS image={mensajeicon} text={"Contacto"} />
        <hr className="mt-[25vh]  border-0.4"/>
      <div className="mt-6">
        <p className="text-white text-md">Diseñado por Jhon Jurado ©</p>
      </div>
      </div>
    </div>
  );
};
