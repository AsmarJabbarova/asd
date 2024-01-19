import { useState } from 'react'
import Navbar from './Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


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
