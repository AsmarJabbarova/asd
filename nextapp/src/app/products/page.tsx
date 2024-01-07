"use client"
import { useState, useEffect } from 'react'
 interface Products{
    id:number,
    title:string
 }
export default function Products() {
  const [products, setProduct] = useState<Products[]>([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.data)
        setLoading(false)
      })
  }, [])
console.log(products)
 
  return (
    <>

      {
        products&&
    products.map((product:Products)=>(
        <div key={product.id}>
        <h1>{product.title}</h1>
        
      </div>
    ))
   }
    </>
 
  )
}