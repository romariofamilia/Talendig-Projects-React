import { useState } from 'react'
import { Boton } from './Boton';
import { Count } from './Count';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount(count+1)
  }

  const handleDecre = () => {
    setCount(count-1)
  }

  const handleReset = () => {
    setCount(0)
  }
  return (
    <section>
      <h1>Contador Romario</h1>
      <div className="container">
        <div className='count-container'>
          <Count 
            count={count}/>
        </div>
        <Boton 
          texto={'Incremento'}
          click={handleIncre}
          isClick={true} />
        <Boton 
          texto={'Incremento'}
          click={handleDecre}
          isClick={true} />
        <Boton 
          texto={'Reiniciar'}
          click={handleReset}
          isClick={false} />
      </div>
    </section>
  )
}

export default App
