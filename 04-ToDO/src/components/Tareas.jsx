import { HiXCircle } from "react-icons/hi";

function Tarea({id, texto, eliminada, completada, completar}) {
  return (
    <div className={completada ? 'w-4/5 min-w-80 bg-black-700 my-1 mx-auto py-2 pr-4 pl-5 flex justify-between items-center rounded border border-s-white bg-violet-700 line-through cursor-pointer' 
    : 
    'w-4/5 min-w-80 bg-black-700 my-1 mx-auto py-2 pr-4 pl-5 flex justify-between items-center rounded border border-s-white bg-slate-700 cursor-pointer'}>
      <div onClick={() => completar(id)} className="w-full h-full text-xl flex items-center">
        {texto}
      </div>
      <div onClick={() => eliminada(id)} className=" w-6 h-6">
        <HiXCircle className=" w-6 h-6" />
      </div>
    </div>
  )
}

export default Tarea