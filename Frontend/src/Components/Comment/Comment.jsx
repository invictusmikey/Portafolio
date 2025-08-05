import { useTranslation } from "react-i18next"

  

export const Comment = () => {
  const { t } = useTranslation("global");

  return (
    <div className="p-6 rounded-xl border-2 border-[#cbe0f9]  bg-[#e5ecfb] w-[30vw]  mt-7 ml-8">
        <p className="text-[#5c83f6] font-semibold text-sm">{t("Comment.Hola")}</p>
    </div>
  )
}
