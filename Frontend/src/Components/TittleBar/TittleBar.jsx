import { ImageN } from "../ImageN/ImageN";
import { useTranslation } from "react-i18next";
import idiomas from "../../assets/idiomas.png";

export const TittleBar = () => {
  const { t, i18n } = useTranslation("global");

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex justify-between space-x-2 items-center p-6 border-b-2 w-[80vw] shadow-slate-200 shadow-md">
      <div className="flex items-center justify-center">
        <h1 className="ml-2 font-bold text-2xl bg-gradient-to-r from-[#4087f4] to-[#46ecb7] bg-clip-text text-transparent mr-3">
          {t("TittleBar.Portafolio")}
        </h1>
        <div className="w-2 h-2 bg-[#9abefb] rounded-full animate-blink delay-200 duration-200"></div>
        <div className="w-2 h-2 bg-[#dbf7e9] rounded-full animate-blink delay-300 duration-300 ml-2"></div>
        <div className="w-2 h-2 bg-[#fba76a] rounded-full animate-blink delay-500 duration-1000 ml-2"></div>
      </div>
      <div>
        <ImageN
          onclick={toggleLanguage}
          image={idiomas}
          className="w-10 mr-8 rounded-full hover:bg-[#358fe4] p-2 border-2 border-[#358fe4]"
        />
      </div>
    </div>
  );
};
