const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
let arr=[
  {"id":1,
    "name":"The Weeknd",
    "img":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjQzODUzYzItMjI2Ni00MTI3LWJhZWYtNjBhYTZmMTI2OGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_.jpg&tbnid=pBswLOTD1VikrM&vet=12ahUKEwi91OKKkJ6DAxXXsScCHQv-AncQMygBegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm1070597%2F&docid=ulAYTZCOEvUhZM&w=3584&h=4500&q=the%20weeknd&ved=2ahUKEwi91OKKkJ6DAxXXsScCHQv-AncQMygBegQIARB1",
    "age":20
  },
  {"id":2,
    "name":"Selena",
    "img":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjQzODUzYzItMjI2Ni00MTI3LWJhZWYtNjBhYTZmMTI2OGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_.jpg&tbnid=pBswLOTD1VikrM&vet=12ahUKEwi91OKKkJ6DAxXXsScCHQv-AncQMygBegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm1070597%2F&docid=ulAYTZCOEvUhZM&w=3584&h=4500&q=the%20weeknd&ved=2ahUKEwi91OKKkJ6DAxXXsScCHQv-AncQMygBegQIARB1",
    "age":21
  },
  {"id":3,
    "name":"Steve Lacy",
    "img":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjQzODUzYzItMjI2Ni00MTI3LWJhZWYtNjBhYTZmMTI2OGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_.jpg&tbnid=pBswLOTD1VikrM&vet=12ahUKEwi91OKKkJ6DAxXXsScCHQv-AncQMygBegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm1070597%2F&docid=ulAYTZCOEvUhZM&w=3584&h=4500&q=the%20weeknd&ved=2ahUKEwi91OKKkJ6DAxXXsScCHQv-AncQMygBegQIARB1",
    "age":22
  }
]
app.use(bodyParser.json())

app.get("/:id",(req,res)=>{
  const id=req.params.id
  const elemById=arr.find((elem)=>elem.id=id)
  res.send(elemById)
})
app.delete("/:id",(req,res)=>{
  const id =req.params.id
  arr=arr.filter((elem)=>elem.id!=id)
  res.send(arr)
})


app.post("/",(req,res)=>{
  const elem=req.body
  elem.id=arr.length+1

  arr.push(elem)
  res.send(arr)
})


app.get('/', (req, res) => {
  res.send(arr)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})