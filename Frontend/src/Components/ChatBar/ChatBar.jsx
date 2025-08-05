import { useTranslation } from "react-i18next"
import enviar from "../../assets/enviar.png"

export const ChatBar = () => {

  const { t } = useTranslation("global");
  return (
    <div className="flex">
        <input className="overflow-y-scroll pl-4 w-[66vw] h-[5vh] border-2 border-[#5581db] ml-8 mt-[6vh] rounded-md" type="text" placeholder={t("ChatBar.Escribe un mensaje...")} name="input-text" id="" />
        <button className="bg-gradient-to-tl from-[#de7635] to-[#5581db] p-3 w-[3vw] h-[5vh] mt-[6vh] ml-3 rounded-md"><img src={enviar} alt="" /></button>
    </div>
  )
}
