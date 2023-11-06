let myBasket=JSON.parse(localStorage.getItem("basket")) ?? []
console.log(myBasket);

let sum=0
function Updatebasket() {
    let products =document.querySelector(".products")
    products.innerHTML=""
    myBasket.forEach(element => {
        myData(element)
        sum+=element.mehsul.price*element.count


    });
    sum = parseFloat(sum.toFixed(2));

    let value=document.querySelector(".value")
   
    value.innerHTML=sum
    
    
}
Updatebasket()

function myData(myBasket) {
    
    let products =document.querySelector(".products")
    products.innerHTML+=` <div class="product">
    <div class="foto">
    <img class="sekil"  src="${myBasket.mehsul.imgLink}" alt="">
    </div>
    <div class="name">
    <h2 class="ad">${myBasket.mehsul.name}</h2>
    </div>
    <div class="count">
    <span onclick="Decrease(${myBasket.mehsul.id})">-</span>
    ${myBasket.count}
    <span onclick="Increase(${myBasket.mehsul.id})">+</span>
    
    </div>
    <div class="price">${myBasket.count*myBasket.mehsul.price}</div>
    <div class="delete" onclick="DeleteProduct(${myBasket.mehsul.id})"><i class="fa-solid fa-trash"></i></div>
    
    </div>`
    
  
    


}



function Increase(myID) {
 myBasket.forEach(x=>{
    if(x.mehsul.id==myID){
        x.count+=1
    }
   
 })
 localStorage.setItem("basket",JSON.stringify(myBasket))
Updatebasket()

}

function Decrease(myID) {
    myBasket.forEach(x=>{
       if(x.mehsul.id==myID){
           if (x.count==1) {
            alert("azalda bilmezsen")
            
           }
           else{

               x.count-=1
           }
       }
      
    })
    localStorage.setItem("basket",JSON.stringify(myBasket))
   Updatebasket()
   
   }
function DeleteProduct(productId) {
     myBasket=myBasket.filter(x=>x.mehsul.id!==productId)
    localStorage.setItem("basket",JSON.stringify(myBasket))
    Updatebasket()
    
}

function Remove() {
  myBasket=[]
    localStorage.removeItem('basket');
    Updatebasket()

}
