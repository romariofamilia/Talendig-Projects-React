import { useState } from "react";
import Formulario from "./TareaFormulario";
import Tarea from "./Tareas";

function ListaTareas() {

  const [tareas, setTareas] = useState([])

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()) {
      const tareaActulizada = [tarea, ...tareas]
      setTareas(tareaActulizada)
    }
  } 

  const eliminarTarea = (id) => {
    const tareasActulizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActulizadas)
  }

  const completarTarea = (id) => {
    const tareasActulizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActulizadas)
  }

  return (
     <>
      <Formulario onSubmit={agregarTarea}/>
      <div className="flex flex-wrap justify-center mt-4">
        {
          tareas.map((tarea) => 
          <Tarea 
          texto={tarea.texto}
          id={tarea.id}
          key={tarea.id}
          completada={tarea.completada}
          eliminada={eliminarTarea}
          completar={completarTarea} />)
        }
      </div>
     </>
  )
}

export default ListaTareas