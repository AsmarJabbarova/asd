import React, { useState } from "react";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(12, "Too Long!")
    .required("name is required"),
  price: Yup.number().required("price is requird"),
});

function AddProduct() {
  // const [name, setName] = useState([]);
  // const [price, setPrice] = useState();

  return (
    <>
      <div className="mainAddPro">
        <div className="titlee">AddProduct</div>
        <div className="form">
          <Formik
            initialValues={{
              name: "",
              price: 0,
            }}
            validationSchema={Schema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              axios
                .post("http://localhost:3000/products", values)
                .then((res) => console.log(res.data));
              alert("gonerildi");
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field type="text" placeholder="name" name="name" />
                {errors.name && touched.name && (
                  <div style={{ color: "red" }}>{errors.name}</div>
                )}
                <Field type="text" placeholder="price" name="price" />
                {errors.price && touched.price && (
                  <div style={{ color: "red" }}>{errors.price}</div>
                )}
                <button type="submit">add</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
