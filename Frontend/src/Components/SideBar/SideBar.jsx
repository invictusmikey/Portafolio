import { ImageP } from "../ImageP/ImageP";
import perfil from "../../assets/Perfil.jpg";
import msjicon from "../../assets/msjicon.png";
import personaicon from "../../assets/personaicon.png";
import carpetaicon from "../../assets/carpetaicon.png";
import mensajeicon from "../../assets/mensajeicon.png";
import { ItemsS } from "../ItemsS/ItemsS";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SideBar = ({ setActiveView }) => {
  const [active, setActive] = useState("Iniciar chat");
  const { t } = useTranslation("global");

  const handleClick = (view) => {
    setActive(view);
    setActiveView(view);
  };

  return (
    <div className="bg-[#20283d] w-[20vw] h-[100vh]  p-9">
      <ImageP image={perfil} />
      <h4 className="mt-2 text-[#afb2bc]">
        {t("SideBar.Desarrollador web junior")}
      </h4>
      <div className="flex flex-col justify-between ">
        <ItemsS
          image={msjicon}
          text={t("SideBar.Iniciar chat")}
          onClick={() => handleClick("Iniciar chat")}
          isActive={active === "Iniciar chat"}
        />
        <ItemsS
          image={personaicon}
          text={t("SideBar.Sobre mi")}
          onClick={() => handleClick("Sobre mí")}
          isActive={active === "Sobre mí"}
        />
        <ItemsS
          image={carpetaicon}
          text={t("SideBar.Proyectos")}
          onClick={() => handleClick("Proyectos")}
          isActive={active === "Proyectos"}
        />
        <ItemsS
          image={mensajeicon}
          text={t("SideBar.Contacto")}
          onClick={() => handleClick("Contacto")}
          isActive={active === "Contacto"}
        />
        <hr className="mt-[25vh]  border-0.4" />
        <div className="mt-6">
          <p className="text-white text-md">
            {t("SideBar.Diseñado por Jhon Jurado ©")}
          </p>
        </div>
      </div>
    </div>
  );
};