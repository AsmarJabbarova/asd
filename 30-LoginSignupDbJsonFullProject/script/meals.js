let productsData = [];
let myDetail =[];
let fav=JSON.parse(localStorage.getItem('fav'))?? []
let myBasket =JSON.parse(localStorage.getItem('basket'))?? []




    fetch('http://localhost:3000/meals')
    .then(res => res.json())
    .then(data => {
        productsData = data;
        displayProducts(productsData);
        // console.log(productsData);
        // console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    function displayProducts(products) {
        const cards=document.querySelector(".cardd")

        products.forEach(meals=> {
           
            cards.innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${meals.imgLink}" class="card-img-top" alt="..." style="width:286px; height:160px">
            <div class="card-body">
              <h5 class="card-title">The ${meals.name}</h5>
              <p class="card-text"> ${meals.name} is ${meals.ingredients}</p>

              <div class="allcard">   <div><a href="detail.html?id=${meals.id}" class="btn btn-primary">Detail</a></div>
              <div><p  onclick="addBasket(${meals.id})" class="btn btn-primary" ><i class="fa-solid fa-cart-shopping cartBtn"></i></p></div>
              <div>              <div class="fav" onclick="addFav(${meals.id})"><i class="fa-solid fa-heart"></i></div></div></div>
           
              
              
 

            </div>
          </div>    
            `
            // cards.appendChild(card);
        });
     
   
    }

    function getProductById(Id) {
      return productsData.find(x => x.id === Id); 
       
   }


   function addFav(productId) {

    let product = getProductById(productId)
    if(fav.some(x=>x.mehsul.id==productId)){
      alert("Already added Favourite!")

    }
    else{
      let obj={
        mehsul:product,
        count:1
      }
      fav.push(obj)
    }
    localStorage.setItem("fav",JSON.stringify(fav))
    
   }



    function addBasket(mealsId){
      let product = getProductById(mealsId)
      if(myBasket.some(x=>x.mehsul.id===mealsId)){
        myBasket.forEach(x=>{
          if(x.mehsul.id==mealsId){
            x.count+=1
          return;  
          }
          
        })

      }
      else{
        let obj ={
          mehsul:product,
          count:1
        }
        myBasket.push(obj)
        
      }
      localStorage.setItem("basket",JSON.stringify(myBasket))
    }
   

    let cartBtns = document.querySelectorAll(".cartBtn")
    let cartArr =[]

  


    let search = document.querySelector(".search");
// console.log(search);
 search.addEventListener("keyup",function(e) {
    console.log(e.target);
    axios("http://localhost:3000/meals").then((res)=>{
        let products =res.data
        cards.innerHTML=''
        products.forEach((product)=>{
            if(product.name.toLowerCase().trim().includes(search.value.toLowerCase().trim())){
                cards.innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${product.imgLink}" class="card-img-top" alt="..." style="width:286px; height:160px">
            <div class="card-body">
              <h5 class="card-title">The ${product.name}</h5>
              <p class="card-text"> ${product.name} is ${product.ingredients}</p>
              <a href="detail.html?id=${product.price}" onclick="goDetail(${product.id})" class="btn btn-primary">Detail</a>
              <button onclick="emptyFavorite()"> Delete</button>
              <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn"></i></a>

           

              
              
            </div>
          </div>    
            `
            }

            
        })
    })
    
 })