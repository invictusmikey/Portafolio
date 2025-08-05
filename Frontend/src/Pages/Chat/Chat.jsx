import { useTranslation } from "react-i18next";
import { ChatBar } from "../../Components/ChatBar/ChatBar";
import { Comment } from "../../Components/Comment/Comment";
import { OpcionChat } from "../../Components/OpcionChat/OpcionChat";
import { TittleBar } from "../../Components/TittleBar/TittleBar";
import { TittleC } from "../../Components/TittleC/TittleC";


export const Chat = () => {

  const { t } = useTranslation("global");

  return (
    <div className="flex flex-col ">
      <TittleBar />
      <div className="overflow-x-auto rounded-xl w-[75vw] h-[83vh] border-2 border-[#3c8aed]  mt-6 ml-10 ">
        <TittleC />
        <Comment />
        <p className="flex justify-center text-[#9097ad] mt-6 ">
          {t("Chat.Selecciona una opción")}
        </p>

        <OpcionChat text={t("OpcionChat.¿Qué tecnologías manejas?")}  />
        <OpcionChat text={t("OpcionChat.Cuéntame sobre tus proyectos")} />
        <OpcionChat text={t("OpcionChat.¿Cómo puedo contactarte?")} />

        <ChatBar isActive={true}/>
      </div>
    </div>
  );
};
