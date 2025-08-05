
export const CardProjects = ({image,tittle,p,linko,linkt}) =>{

return(
    <div className="flex flex-col h-[45vh] bg-white  border-2 border-gray-600 rounded-lg shadow-lg p-6 m-4 w-[20vw] hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <img className="rounded-xl border-2 border-gray-500 w-[17vw]" src={image} alt="" />
        <h3 className="text-[#3c8bec] mt-1">{tittle}</h3>
        <p>{p}</p>
        <div className="mt-3">
            <button className="rounded-md h-10 w-[8vw] border-2 border-blue-600 text-white bg-blue-600 hover:scale-105"><a target="_blank" href={linko}>Ver demo</a></button>
            <button className="ml-1 rounded-md h-10 w-[8vw] border-2 border-blue-600 text-blue-600 hover:scale-105"><a target="_blank" href={linkt}>Codigo</a></button>
        </div>
        
    </div>
)

}