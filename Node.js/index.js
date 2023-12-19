// const express = require('express')
// const app = express()
// require('dotenv').config()
// require("./src/confiq/db")
// const bodyParser =require('body-parser')
// const productsRouter=require("./src/")
// console.log(process.env);
// const port = process.env.PORT || 4040;
// console.log(process.env);
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

const express = require("express");
require("dotenv").config();
const dbConnect = require("./src/confiq/db");
dbConnect();
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./src/routers/productRouter.js");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/", userRouter); // new

// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   //   res.send("<h1>Hello World!</h1>");
//   res.send("<h1>Users</h1><br/><h1>Products</h1>");
//   //   res.send(arr);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

 //getById

 
//  app.get('/products/:id',(req,res)=>{
//     const id= req.params.id;
//     const elemById=data.products.find((elem)=>elem.id==id);
//     res.send(elemById);
//  })

//  app.get('/products',(req,res)=>{
//     if(!req.query.name && !req.query.price){
//         res.send(JSON.stringify(data.products))
//     }
//  else if(req.query.name){
// res.send(data.products.filter(x=>x.name.includes(req.query.name)))
//     }
    
//    else  if(req.query.price){
//         res.send(data.products.filter(x=>x.price==req.query.price))
//     }
//     else if(req.query.price && req.query.name){
//         res.send(data.products.filter(x=>x.price==req.query.price, x=>x.includes(req,query.name)))
//     }
//    })

//    app.get('/products',(req,res)=>{
//     // if(req.query.price){
//     //     res.send(JSON.stringify(data.products))
//     // }
//     else{
// res.send(JSON.stringify(data.products).filter(x=>x.price==(req.query.price)))
//     }
//    })