// Pages/Home/Home.jsx o .tsx
import { useState } from "react";
import { SideBar } from "../../Components/SideBar/SideBar";
import { Aboutme } from "../Aboutme/Aboutme";
import { Chat } from "../Chat/Chat";
import { Contact } from "../Contact/Contact";
import { Projects } from "../Projects/Projects";

export const Home = () => {
  const [activeView, setActiveView] = useState("Chat");

  const renderView = () => {
    switch (activeView) {
      case "Sobre mí":
        return <Aboutme />;
      case "Contacto":
        return <Contact />; 
      case "Proyectos":
        return <Projects />; 
      case "Projects":
        return 
      default:
        return <Chat />;
    }
  };

  return (
    <div className="flex">
      <SideBar setActiveView={setActiveView} />
      {renderView()}
    </div>
  );
};
