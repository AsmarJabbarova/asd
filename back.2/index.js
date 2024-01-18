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
    imageURL:String
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Crud
app.get('/products',async(req,res)=>{
    const products= await ProductModel.find({})
    res.send(products)
})

app.get('/products/:id', async(req,res)=>{
    const id= use.params.id
    const product= await ProductModel.findById(id)
    res.send(product)
})
app.post('/products', async(req,res)=>{
    const New= new ProductModel({
        name:req.body.name,
        price:req.body.price,
        imageURL:req.body.imageURL
    })
    await New.save()
    res.send(New)
})
app.delete('/products/:id', async(req,res)=>{
    const id=req.params.id
    const deleteProducts=await ProductModel.findByIdAndDelete(id)
    res.send(deleteProducts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MONGODB Connected");
}).catch((err)=>{
    console.log("faild");
})

