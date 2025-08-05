import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { TittleBar } from "../../Components/TittleBar/TittleBar";

export const Aboutme = () => {
  const { t } = useTranslation("global");

  return (
    <div className="overflow-y-auto">
      <TittleBar />
      <div className="p-8 rounded-xl w-[75vw] h-[80vh] border-2 border-[#3c8aed] mt-6 ml-10 overflow-y-auto">
        <h1>
          <b className="text-sky-600 text-3xl">{t("Aboutme.Sobre mí")}</b>
        </h1>
        <br />
        <div >
          <ReactMarkdown>
            {t("Aboutme.caso")}
            </ReactMarkdown>
        </div>

        <iframe
          src="/HojaDeVidaPersonal.pdf"
          type="application/pdf"
          width="100%"
          height="500px"
          className="mt-6 rounded-lg border"
          title="Hoja de vida"
        ></iframe>
      </div>
    </div>
  );
};
