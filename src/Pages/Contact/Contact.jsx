import { TittleBar } from "../../Components/TittleBar/TittleBar"

export const Contact = () => {
  return (
    <div >
          <TittleBar />
          <div className=" p-8 rounded-xl   w-[75vw] h-[40vh] border-2 border-[#3c8aed] mt-6 ml-10 ">
            <h1>
              <b className="text-sky-600 text-3xl pointer-events-none">Contacto</b>
            </h1>
            <br />
            <p className="pointer-events-none">Estos son mis proyectos personales.</p>
          </div>
        </div>
  )
}
