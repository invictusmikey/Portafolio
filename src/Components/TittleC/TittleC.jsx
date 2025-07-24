import { useTranslation } from "react-i18next"


export const TittleC = () => {

  const { t } = useTranslation("global");

  return (
    <div className=" p-4 w-full rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#3c8aed] to-[#33c58e]">
        <h2 className="text-2xl text-white">Chat</h2>
        <h3 className="text-[#cbe0f9]">{t("TittleC.Acerca de mi perfil profesional👓🧒🏻")}</h3>

    </div>
  )
}
