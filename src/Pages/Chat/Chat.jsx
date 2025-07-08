import { Comment } from "../../Components/Comment/Comment";
import { TittleBar } from "../../Components/TittleBar/TittleBar";
import { TittleC } from "../../Components/TittleC/TittleC";
export const Chat = () => {
  return (
    <div className="flex flex-col">
      <TittleBar />
      <div className="rounded-xl w-[70vw] h-[83vh] border-2 border-[#3c8aed] mt-6 ml-10 ">
        <TittleC />
      <Comment />
      </div>
      

    </div>
  );
};
