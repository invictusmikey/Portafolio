import { TittleBar } from "../../Components/TittleBar/TittleBar";

export const Aboutme = () => {
  return (
    <div className="overflow-y-auto">
      <TittleBar />
      <div className="p-8 rounded-xl w-[75vw] h-[80vh] border-2 border-[#3c8aed] mt-6 ml-10 overflow-y-auto">
        <h1>
          <b className="text-sky-600 text-3xl">Sobre Mí.</b>
        </h1>
        <br />
        <p>
          Soy un desarrollador full stack junior con experiencia en la
          construcción de aplicaciones web utilizando tecnologías como <b>React,
          Node.js y TypeScript.</b> Me especializo en el desarrollo de APIs y en la
          integración con bases de datos relacionales como <b>MySQL</b> y no
          relacionales como <b>MongoDB</b>, usando ORMs como <b>Sequelize y Mongoose</b>. Me
          siento cómodo trabajando tanto en el frontend como en el backend, y
          manejo herramientas como <b>Git, GitHub, TailwindCSS y Bootstrap</b>. He
          trabajado en proyectos reales que me han permitido aplicar mis
          conocimientos para resolver problemas concretos, siempre buscando
          escribir código limpio, organizado y mantenible. Disfruto el <b>trabajo
          en equipo</b>, el aprendizaje constante y aportar soluciones prácticas que
          generen valor. Estoy comprometido con mi crecimiento profesional y con
          sumar al equipo con responsabilidad y proactividad.
        </p>
        
        <iframe
          src="/HojaDeVidaPersonal.pdf"
          type="application/pdf"
          width="100%"
          height="500px"
          className="mt-6 rounded-lg border"
          title="Hoja de vida"
        ></iframe>
      </div>
    </div>
  );
};
