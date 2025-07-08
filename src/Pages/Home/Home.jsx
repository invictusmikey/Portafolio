import { SideBar } from "../../Components/SideBar/SideBar";
import { Chat } from "../Chat/Chat";
export const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <Chat />
    </div>
  );
};
