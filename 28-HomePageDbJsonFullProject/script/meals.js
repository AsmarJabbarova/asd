
let productsData = [];
let myDetail =[]




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

        products.forEach(product => {
            const card = document.createElement('div');
            // card.classList.add('card');
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
            cards.appendChild(card);
        });
     
   
    }



    // function goDetail(productId) {

    //     const product = getProductById(productId);
    //     console.log(product);
    //     // if (myFav.some(x => x.mehsul.id == product.id)) {
    //     //     Swal.fire({
    //     //     position: 'top-end',
    //     //     icon: 'success',
    //     //     title: 'Already added favourite!',
    //     //     showConfirmButton: false,
    //     //     timer: 1500
    //     //   })
    //     // } 
    //     // else {
    //     //     let basketObj = {
    //     //         count: 1,
    //     //         mehsul: product
    //     //     };
    //     // }
        
    //         myDetail.push(product);
    //     localStorage.setItem("detail",JSON.stringify(myDetail))
    // }
   

    let cartBtns = document.querySelectorAll(".cartBtn")
    let cartArr =[]
    let localCartArr=JSON.parse(localStorage.getItem("cart"))
    if(localCartArr){
        cartArr=[...localCartArr]
    }

    for (let btn of cartBtns){
        btn.addEventListener("click",function(e){
            e.preventDefault();
            if(cartArr.find((elem) => elem.id ==this.name)){
                console.log(cartArr[+this.name-1]);
                cartArr[+this.name-1].count++;
                localStorage.setItem("cart".JSON.stringify(cartArr))
            }
            else{
                meals[+this.name-1].count = 1;
                cartArr.push(meals[+this.name-1]);
                localStorage.setItem("cart",JSON.stringify(cartArr))
            }
        })
    }
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

