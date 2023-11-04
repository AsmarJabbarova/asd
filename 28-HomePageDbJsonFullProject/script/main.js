
let productsData = [];
let myDetail =[]
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
        const cards=document.querySelector(".cardd")

        products.forEach(product => {
            const card = document.createElement('div');
            // card.classList.add('card');
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
            cards.appendChild(card);
        });
     
   
    }



    function goDetail(productId) {

        const product = getProductById(productId);
        console.log(product);
      
        
            myDetail.push(product);
        localStorage.setItem("detail",JSON.stringify(myDetail))
    }
    function getProductById(productId) {
        return productsData.find(x => x.age === productId);
        
    }

// basket
    function addToBasket(productId) {
        const product = getProductById(productId);
        console.log(product);
        if (myBasket.some(x => x.mehsul.id == product.id)) {
            myBasket.forEach(elem => {
                if (elem.mehsul.id == product.id) {
                    elem.count += 1;    
                    return; 
                }
            });
        } 
        //ilk click edendeki yaranan obyekt
        else {
            let basketObj = {
                count: 1,
                mehsul: product
            };
            myBasket.push(basketObj);
        }
    
        console.log(myBasket);
        localStorage.setItem("basket",JSON.stringify(myBasket))
        
    
    }
    function getProductById(productId) {
        return productsData.find(x => x.id === productId);}

        // meals.js
// ...

// Add this function to handle adding items to the basket
function addToBasket(product) {
    const localBasketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    localBasketItems.push(product);
    localStorage.setItem('basketItems', JSON.stringify(localBasketItems));
}

// ...
let cartBtns = document.querySelectorAll('.cartBtn')
// Modify the click event handler for adding items to the cart
for (let btn of cartBtns){
    btn.addEventListener("click",function(e){
        e.preventDefault();
        const product = productsData[+this.name - 1];
        addToBasket(product);
    })
}

// ...



