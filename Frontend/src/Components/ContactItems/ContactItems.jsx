
export const ContactItems = ({text ,text2, link, targete}) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md border border-sky-500 hover:bg-[#e5ecfb] hover:text-[#5c83f6] transform transition-transform duration-200 hover:scale-105">
       <p><a  href={link} target={targete} ><b className="text-[#0285c6]">{text} :</b> {text2}</a></p>
    </div>
  )
}