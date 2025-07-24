import { useTranslation } from "react-i18next";
import { TittleBar } from "../../Components/TittleBar/TittleBar";
export const Projects = () => {
  const {t} = useTranslation("global");
  return (
    <div>
      <TittleBar />
      <div className=" p-8 rounded-xl  w-[75vw] h-[40vh] border-2 border-[#3c8aed] mt-6 ml-10">
        <h1>
          <b className="text-sky-600 text-3xl">{t("Projects.Proyectos")}</b>
        </h1>
        <br />
        <p>{t("Projects.msj")}</p>
      </div>
    </div>
  );
};
