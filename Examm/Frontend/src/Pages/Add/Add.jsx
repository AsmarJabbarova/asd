import React, { useEffect, useState } from 'react'
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {Helmet} from "react-helmet";

const Shema=Yup.object().shape({
  name:Yup.string().required('name is  Required'),
  price:Yup.number().required('price is Required'),
  title:Yup.string().required('title is Required'),
})

function Add() {
  const[prducts, setProducts]=useState([])
  useEffect(()=>{
axios.get("http://localhost:6060/products").then((res)=>{
  setProducts(res.data)
})
 


  },[])
 
  return (
    <div className="mainAdd">

<Helmet>

</Helmet>

    <Formik initialValues={{
      name:"",
      price:0,
      title:"",
    }} validationSchema={Shema}
    onSubmit={(values)=>{
      console.log("test");
      axios.post("http://localhost:6060/products", values).then((res)=>{
        console.log(res.data);
        setProducts([...prducts,res.data])
      })
    }}
    >

      {({errors, touched})=>(
        <Form >
        <Field type="text" name='name' placeholder='name'/>
        {errors.name && touched.name && <div>{errors.name}</div>}
        <Field type="text" name='price' placeholder='price'/>
        {errors.price && touched.price && <div>{errors.price}</div>}
        <Field type="text" name='title' placeholder='title'/>
        {errors.title && touched.title&& <div>{errors.title}</div>}
        <button type='submit'>Add</button>
      
      </Form>
      
      )}

    </Formik>

    <div className="table">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Title</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      prducts.map((elem,i)=>(
<tr key={i}>
      <th scope="row">{elem._id}</th>
      <td>{elem.name}</td>
      <td>{elem.price}</td>
      <td>{elem.title}</td>
      <td><button onClick={()=>{
        axios.delete(`http://localhost:6060/products/${elem._id}`).then(()=>{
          axios(`http://localhost:6060/products`).then((res)=>{
            setProducts(res.data)
          })
        })
      }}>Delete</button></td> 
    </tr>
      ))
    }
    
    
  </tbody>
</table>
    </div>

    </div>
  )
}

export default Add