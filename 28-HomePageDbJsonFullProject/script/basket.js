let myBasket =JSON.parse(localStorage.getItem('basket'))?? []

// console.log(myBasket);

function drawBasket() {
    let products = document.querySelector(".products");
    products.innerHTML = ""; 

    myBasket.forEach(element => {
        myTable(element);
    });
}

function myTable(element){
    let products=document.querySelector(".products")

    products.innerHTML+=` <div class="product">
    <div class="foto">
        <img class="sekil" src="${element.mehsul.image}"  alt="">
    </div>
    <div class="name">
    ${element.mehsul.title}
    </div>
    <div class="count">
        <span onclick="DeleteProduct(${element.mehsul.id})" >-</span>
        ${element.count}
        <span onclick="AddProduct(${element.mehsul.id})" >+</span>

    </div>
    <div class="price">${element.count*element.mehsul.price}</div>
</div>`

}

function AddProduct(productId) {
    const product = getProductById(productId);
    console.log(product);
    product.count+=1
    localStorage.setItem("basket",JSON.stringify(myBasket))
    drawBasket();
    

}
function DeleteProduct(productId) {
    const product = getProductById(productId);
    console.log(product);
    product.count-=1
    localStorage.setItem("basket",JSON.stringify(myBasket))
    drawBasket();
    if (product.count==0) {
        
    }
    

}
function getProductById(productId) {
    return myBasket.find(x => x.mehsul.id === productId);
    
}

drawBasket(); 

function Remove() {
    myBasket = [];

    
    localStorage.removeItem('basket');

    
    drawBasket();

}

