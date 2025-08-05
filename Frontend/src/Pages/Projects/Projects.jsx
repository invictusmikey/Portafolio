import { useTranslation } from "react-i18next";
import fakestore from "../../assets/fakestore.png";
import lei from "../../assets/p-lei.png";
import flor from "../../assets/flor.png";
import { TittleBar } from "../../Components/TittleBar/TittleBar";
import { CardProjects } from "../../Components/CardsProjects/CardsProjects";
export const Projects = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <TittleBar />
      <div className=" p-8 rounded-xl  w-[75vw]  border-2 border-[#3c8aed] mt-6 ml-10">
        <h1>
          <b className="text-sky-600 text-3xl">{t("Projects.Proyectos")}</b>
        </h1>
        <br />
        <p>{t("Projects.msj")}</p>
        <h1 className="mt-7">
          <b className="text-sky-600 text-2xl mt-10">Front-end</b>
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <CardProjects
            p={
              "Aplicacion web que trae los datos de una api y los estiliza, en este caso fake store api"
            }
            tittle={"FakeStore"}
            image={fakestore}
            linko={"https://store-id3s8dj12-jhon-jurados-projects.vercel.app/"}
            linkt={"https://github.com/invictusmikey/StoreApi"}
          />
          <CardProjects
            image={flor}
            tittle={"Flor"}
            p={"Solo lo hice para enviar a otra persona"}
            linko={"https://flor-nine-tawny.vercel.app/"}
            linkt={"https://github.com/invictusmikey/flor"}
          />
          <CardProjects
            image={lei}
            tittle={"Portafolio digital"}
            p={
              "un trabajo sencillo que me pidieron para presentar en universidad con la finalidad de una buena nota"
            }
            linko={"https://portafolio-lei.vercel.app/"}
            linkt={"https://github.com/invictusmikey/portafolio--lei"}
          />
        </div>
      </div>
    </div>
  );
};
