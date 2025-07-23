import { TittleBar } from "../../Components/TittleBar/TittleBar";
import { ContactItems } from "../../Components/ContactItems/ContactItems";

export const Contact = () => {
  return (
    <div>
      <TittleBar />
      <div className=" p-8 rounded-xl   w-[75vw]  border-2 border-[#3c8aed] mt-6 ml-10 ">
        <h1>
          <b className="text-sky-600 text-3xl pointer-events-none">Contacto</b>
        </h1>
        <br />
        <p className="pointer-events-none">Estos son mis medios de contacto.</p>
        <ContactItems targete={'_blank'} link={'https://wa.me/+573173443088'} text={'whatsapp'} text2={3173443088}/>
        <ContactItems targete={'_blank'} link={'mailto:jhonedisonjurado59@gmail.com'} text={'Correo'} text2={'jhonedisonjurado59@gmail.com'}/>
        <ContactItems targete={'_blank'} link={'www.linkedin.com/in/jhon-edison-jurado'} text={'linkedin'} text2={'www.linkedin.com/in/jhon-edison-jurado'}/>
      </div>
    </div>
  );
};
