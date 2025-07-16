import { TittleBar } from "../../Components/TittleBar/TittleBar";

export const Projects = () => {
  return (
    <div>
      <TittleBar />
      <div className=" p-8 rounded-xl hover:scale-105 w-[75vw] h-[40vh] border-2 border-[#3c8aed] mt-6 ml-10">
        <h1>
          <b className="text-sky-600 text-3xl">Proyectos.</b>
        </h1>
        <br />
        <p>Estos son mis proyectos personales.</p>
      </div>
    </div>
  );
};
