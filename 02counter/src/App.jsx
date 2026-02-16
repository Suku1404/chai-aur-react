import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const removeValue = () => {
    console.log("Removing value", Math.random());
    setCounter(prevCounter => prevCounter - 1)
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}>
      Add value</button>
    <br />
    <button  onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
