import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import CategoryDetail from './assets/pages/CategoryDetail';
import AddCategory from './assets/pages/AddCategory';
import Navbar from './companent/Navbar';
import Home from "./assets/pages/Home";
import Categories from "./assets/pages/Categories";


function App() {

  return (
    <>
 <BrowserRouter>
     <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/category" element={<Categories/>}>
          
      <Route path="add" element={<AddCategory/>}/>
        </Route>
        <Route path="/category/:id" element={<CategoryDetail/>}/>
       
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
