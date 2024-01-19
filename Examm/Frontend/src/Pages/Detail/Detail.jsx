import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const[detail,setDetail]=useState([])
  let {productsId}=useParams()
useEffect(()=>{
axios.get(`http://localhost:6060/products/${productsId}`).then((res)=>{
  setDetail(res.data)
})
},[])

  return (
    <>
    {
      <div className="kart" >
      <div className="name">
      {detail.name}
      </div>
      <div className="up">
        <div className="desc">
        {detail.title}
        </div>
        <div className="price">${detail.price}</div>
        <button onClick={()=>handleDetail(detail._id)}></button>
      </div>
    </div>
    }
    </>
    
  )
}

export default Detail