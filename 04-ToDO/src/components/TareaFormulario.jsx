import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
function Formulario(props) {

  const [input, setInput] = useState('')


  const manejarEnvio = (e) => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
    }
    props.onSubmit(tareaNueva)
  }

  const manejarCambio = (e) => {
    setInput(e.target.value)
    console.log(e.target.value);
  }

  return (
    <form className="flex flex-wrap items-center justify-center">
      <input 
      className="text-black w-48 bg-white py-2 pr-8 pl-4 rounded-l-md  border-2 border-green-700 outline-none"
      type="text"
      placeholder="Escribe una Tarea"
      name="texto"
      onChange={manejarCambio} />
      <button onClick={manejarEnvio} className=" p-2.5 font-sans border-none rounded-r-md cursor-pointer outline-none bg-green-700 capitalize">Agregar tarea</button>
    </form>
  )
}

export default Formulario