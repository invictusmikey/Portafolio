import { ChatBar } from "../../Components/ChatBar/ChatBar";
import { Comment } from "../../Components/Comment/Comment";
import { OpcionChat } from "../../Components/OpcionChat/OpcionChat";
import { TittleBar } from "../../Components/TittleBar/TittleBar";
import { TittleC } from "../../Components/TittleC/TittleC";
export const Chat = () => {
  return (
    <div className="flex flex-col ">
      <TittleBar />
      <div className="overflow-x-auto rounded-xl w-[75vw] h-[83vh] border-2 border-[#3c8aed]  mt-6 ml-10 ">
        <TittleC />
        <Comment />
        <p className="flex justify-center text-[#9097ad] mt-6 ">
          Selecciona una opción :
        </p>

        <OpcionChat text={"¿Qué tecnologías manejas?"}  />
        <OpcionChat text={"Cuéntame sobre tus proyectos"} />
        <OpcionChat text={"¿Cómo puedo contactarte?"} />

        <ChatBar />
      </div>
    </div>
  );
};
