import React from 'react'
import { Field, Formik,Form } from 'formik';
import * as Yup from 'yup';
const Shema = Yup.object().shape({
  name: Yup.string().required(`name in require`),
  price: Yup.string().required("price is require")
})


function Add() {



  return (
    <>
      <Formik initionalValues={{
        name: "",
        price: 0
      }}
        validationSchema={Shema}
        onSubmit={(values) => {
          axios.post("http://localhost:3000/product", values).then((res) => console.log(res.data))
    }}
    >
      {({ errors, touched }) => {
        <Form onSubmit={handleSubmit}>
          <Field type="text" placeholder='name' name="name" />
          {errors.name && touched.name && (
            <div>{errors.name}</div>
          )}

          <Field type="number" placeholder='price' name="price" />
          {errors.price && touched.price && (
            <div>{errors.price}</div>
          )}
          <button type="submit">
            Submit
          </button>

        </Form>
      }}

    </Formik >
    </>
  )
}

export default Add