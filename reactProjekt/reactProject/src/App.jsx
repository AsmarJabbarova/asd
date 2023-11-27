import { useState } from 'react'

import './App.css'
import Suppliers from './companent/Suppliers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Suppliers/>
    </>
  )
}

export default App
