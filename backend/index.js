const express = require('express')
const dotenv=require(`dotenv`)
const cors=require(`cors`)
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

//models
const PruductModel=mongoose.model("Product",new mongoose.Schema({
    name:String,
    price:Number,
    img:String
}))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("failed to connect to Mongo DB!");
  });