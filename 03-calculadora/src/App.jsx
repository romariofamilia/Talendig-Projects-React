import { useState } from 'react'
import './App.css'
import { Boton } from './Boton'
import { Display } from './Display'
import { evaluate } from 'mathjs'

function App() {
  
  const [input, setInput] = useState('')

  const action = (val) => {
    setInput(input+val)
  }

  const result = () => {
    if(input) {
      setInput(evaluate(input))
    }
    else {
      alert('Ingrese Datos')
    }
  }

  console.log(input);
  
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
      <Display input={input}/>
      <div className="">
        
        <div className='flex'>
          <Boton handleClick={action}>9</Boton>
          <Boton handleClick={action}>8</Boton>
          <Boton handleClick={action}>7</Boton>
          <Boton handleClick={action}>+</Boton>
        </div>
        
        <div className='flex'>
          <Boton handleClick={action}>6</Boton>
          <Boton handleClick={action}>5</Boton>
          <Boton handleClick={action}>4</Boton>
          <Boton handleClick={action}>-</Boton>
        </div>

        <div className='flex'>
          <Boton handleClick={action}>3</Boton>
          <Boton handleClick={action}>2</Boton>
          <Boton handleClick={action}>1</Boton>
          <Boton handleClick={action}>*</Boton>
        </div>
        
        <div className='flex'>
          <Boton handleClick={() => setInput('')}>AC</Boton>
          <Boton handleClick={action}>/</Boton>
          <Boton handleClick={action}>.</Boton>
          <Boton handleClick={result}>=</Boton>
        </div>
        
        
      </div>
      </div>
    </>
  )
}

export default App
