import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function CategoryDetail() {
    const navigate = useNavigate();
    const { id} = useParams();
    console.log(id);
  return (
    <>
      <button onClick={()=>{
        navigate(-1)
      }}>
     back
    </button>
   <div>Details</div>
    </>
  
  )
}

export default CategoryDetail