import React, { useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHotMeal } from "react-icons/gi";
import './../Home/Home.scss'
import axios from 'axios';
import { GiMeat } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Home() {
const [products, setProducts]=useState([])
const [search, setSearch]=useState("")
const[defaultt,setDefaultt]=useState([])
const navigate=useNavigate()

useEffect(()=>{
axios.get("http://localhost:6060/products").then((res)=>{
setProducts(res.data)
setDefaultt(products)
})
},[])
const handleDetail=(productsId)=>{
  navigate(`/detail/${productsId}`)
}

const handlExpensiv=()=>{
const  filter1=[...products].sort((a,b)=>b.price-a.price)
setProducts(filter1)
}
const handlCheap=()=>{
  const filter2=[...products].sort((a,b)=>a.price-b.price)
  setProducts(filter2)
}
const handlAandZ=()=>{
  const filter3=[...products].sort((a,b)=>b.name.localeCompare(a.name))
  setProducts(filter3)
}
const handleZandA=()=>{
  const filter4=[...products].sort((a,b)=>a.name.localeCompare(b.name))
  setProducts(filter4)
}
const handledefault=()=>{
  setProducts(defaultt)
}

  return (
    <div className="mainHome">
<div className="slider">

<Carousel>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt="" />
        <Carousel.Caption className='sliderTitle'>
          <h3 >Food and more</h3>
          <p>By Chef Francis Smith</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt="" />
        <Carousel.Caption className='sliderTitle'>
          <h3>Special Dish.</h3>
          <p>By Chef Francis Smith</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" alt="" />
        <Carousel.Caption className='sliderTitle'>
          <h3>Hygienic Food</h3>
          <p>
          By Chef Francis Smith.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</div>
<div className="welcome">
  <div className="title">
    <div className="icon"><GiMeat /></div>
    <div className="wel">Welcome</div>
  </div>
  <div className="years">
    <div className="iki">
<div className="year">2002</div>
<div className="title">
In vitae nisi aliquam, scelerisque leo a, <br /> volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, <br />id lobortis leo volutpat.
</div>
    </div>
    <div className="on">
    <div className="year">2010</div>
<div className="title">
Stpat sem. Vivamus rutrum dui fermentum eros <br /> hendrerit, id lobortis leo volutpat. <br />Maecenas sollicitudin est in libero pretium.
</div>
    </div>
    <div className="sekkiz">

    </div>
  </div>
</div>

<div className="menu">

  <div className="our">
    <div className="ic"><GiHotMeal /></div>
    <div className="ourtitle">
    Our Menu
    </div>
  </div>
  <dic className="searchFilter">
    <div className="search">
      <input type="text" placeholder='Search' onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
    </div>
    <div className="filters">
      <button onClick={handlExpensiv}>Expensive</button>
      <button onClick={handlCheap}>Cheap</button>
      <button onClick={handlAandZ} >AandZ</button>
      <button onClick={handleZandA}>ZandA</button>
      <button onClick={handledefault}>Default</button>
    </div>
  </dic>
  <div className="cards">
{
  products.filter(item=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((elem,i)=>(
    <div className="kart" key={i}>
      <div className="name">
      {elem.name}
      </div>
      <div className="up">
        <div className="desc">
        {elem.title}
        </div>
        <div className="price">${elem.price}</div>
        <button onClick={()=>handleDetail(elem._id)}></button>
      </div>
    </div>
  
  ))
}

    
  
    
  </div>

</div>

    </div>
  )
}

export default Home