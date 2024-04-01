import { useState } from 'react'
import Tarea from './components/Tareas'
import Formulario from './components/TareaFormulario'
import ListaTareas from './components/ListaTareas'



function App() {

  return (
    <section>
      <div className='w-96 min-w-80 h-96 bg-slate-300 p-6 m-3 rounded justify-center overflow-scroll overflow-x-hidden'>
        <h1 className=' text-gray-900 font-semibold text-4xl font-sans text-center mb-4'>Mis tareas</h1>
        <ListaTareas />
      </div>
    </section>
  )
}

export default App
