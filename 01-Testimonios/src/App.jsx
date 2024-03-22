import { useState } from 'react'
import './App.css'
import { TestimonyCard } from './card'

function App() {
  
  return (
    <section>
      <TestimonyCard
      name={'Emma Bostian'}
      lugar={'Suecia'}
      cargo={'Ingeniera de Software'}
      empresa={'Spotify'}
      testimonio={'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'}
      />
      <TestimonyCard 
      name={'Sarah Ternulia'}
      lugar={'Japon'}
      cargo={'Ingeniera de Sotfware'}
      empresa={'Google'}
      testimonio={'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'}
      />
    </section>
  )
}

export default App
