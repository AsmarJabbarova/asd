const express = require('express')
const cors =require("cors")
const dotenv=require('dotenv')
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
//model
const ProductModel=mongoose.model("esmer", new mongoose.Schema({
  name:String,
  price:Number,
  imageURL:String,
  title:String
}))
//crud
app.get('/products', async(req,res)=>{
  const products= await ProductModel.find({})
  res.send(products)
})

app.get('/products/:id', async(req,res)=>{
  const id=req.params.id
  const products= await ProductModel.findById(id)
  res.send(products)
})

app.post('/products', async(req,res)=>{
  const newProduts= new  ProductModel({
    name:req.body.name,
    price:req.body.price,
    imageUrl:req.body.imageUrl,
    title:req.body.title
  })
  await newProduts.save()
  res.send(newProduts)
})

app.delete('/products/:id', async(req,res)=>{
  const id =req.params.id
  const deletePro= await ProductModel.findByIdAndDelete((id))
  res.send(deletePro)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("MONGODB Connected");
}).catch((err)=>{
  console.log("faild");
})