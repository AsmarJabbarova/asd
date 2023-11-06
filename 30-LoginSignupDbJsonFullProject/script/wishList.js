let myFav=JSON.parse(localStorage.getItem("fav")) ?? []



function UpdateFav() {
    let products =document.querySelector(".products")
    products.innerHTML=""
    myFav.forEach(element => {
        myData(element)


    });
 
    
    
}
UpdateFav()

function myData(myBasket) {
    
    let products = document.querySelector(".products");

let imgSource = myBasket.mehsul.imgLink || myBasket.mehsul.image

products.innerHTML += `
    <div class="product">
        <div class="foto">
            <img class="sekil"  src="${imgSource}" alt="">
        </div>
        <div class="name">
            <h2 class="ad">${myBasket.mehsul.name}</h2>
        </div>
        <div class="delete" onclick="DeleteProduct(${myBasket.mehsul.id})">
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
`;

    
  
    


}





function DeleteProduct(productId) {
     myFav=myFav.filter(x=>x.mehsul.id!==productId)
    localStorage.setItem("fav",JSON.stringify(myFav))
    UpdateFav()
    
}

function Remove() {
  myFav=[]
    localStorage.removeItem('fav');
    UpdateFav()

}
