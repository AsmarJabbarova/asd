import { useState } from 'react'
import './App.css'
import Navbar from "./pages/Navbar/Navbar.jsx"
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Outlet/>
     
    </>
  )
}

export default App
