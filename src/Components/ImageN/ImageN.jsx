import { useState,useEffect } from "react";

export const ImageN = ({ image, className = "" }) => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }else{
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  
  return (
    <button
      className={`w-10 mr-8 rounded-full hover:bg-slate-600 p-2 border-2 border-slate-600  ${className}`}
      onClick={handleChangeTheme}
      aria-label="Cambiar tema"
    >
      <img src={image} alt="Cambiar tema" />
    </button>
  );
};
