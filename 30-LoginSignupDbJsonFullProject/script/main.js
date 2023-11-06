let cards=document.querySelector(".cardd")
let productsData = [];
let myDetail =[]
let fav=JSON.parse(localStorage.getItem('fav'))?? []
let myBasket =JSON.parse(localStorage.getItem('basket'))?? []

    fetch('http://localhost:3000/singers')
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
       

        products.forEach(product => {
            let card = document.createElement('div');
            // card.classList.add('card');
            cards.innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">The ${product.name}</h5>
              <p class="card-text">The ${product.name} is ${product.nationality}</p>
              <div class="allcard"> <div> <a href="detail.html?id=${product.id}"  class="btn btn-primary ">Detail</a></div>
              <div> <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn" ></i></a></div>
              <div class="fav" onclick="addFav(${product.id})"><i class="fa-solid fa-heart"></i></div>
              </div>

             
             

              
              
            </div>
          </div>    
            `
            cards.appendChild(card);
        });
     
     
   
        


    }

let search = document.querySelector(".search");
console.log(search);
 search.addEventListener("keyup",function(e) {
    console.log(e.target);
    axios("http://localhost:3000/singers").then((res)=>{
        let products =res.data
        cards.innerHTML=''
        products.forEach((product)=>{
            if(product.name.toLowerCase().trim().includes(search.value.toLowerCase().trim())){
                cards.innerHTML+=`
                <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">The ${product.name}</h5>
                  <p class="card-text">The ${product.name} is ${product.nationality}</p>
                  <a href="detail.html?id=${product.age}" onclick="goDetail(${product.age})" class="btn btn-primary">Detail</a>
                  <button onclick="emptyFavorite()"> Delete</button>
                  <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn" ></i></a>
    
                  
                  
                </div>
              </div>    
                `
            }

            
        })
    })
    
 })

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


    // function goDetail(productId) {

    //     const product = getProductById(productId);
    //     console.log(product);
      
        
    //         myDetail.push(product);
    //     localStorage.setItem("detail",JSON.stringify(myDetail))
    // }
    // function getProductById(productId) {
    //     return productsData.find(x => x.age === productId);
        
    // }

//basket





