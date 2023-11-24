import { useState } from 'react'
import Suppliers from './Suppliers'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Suppliers/>
    </>
  )
}

export default App
