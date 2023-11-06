// let id = new URLSearchParams(location.search).get("id");
// let container=document.querySelector(".container")
// console.log(id);
// axios("http://localhost:3000/singers").then((res) => {
//   let data = res.data;
//   let element = data.find((elem) => elem.id == id);
//   console.log(element);
//   container.innerHTML=`  <div class="card" style="width:90%; height:700px">
//   <img src="${element.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">The ${element.name}</h5>
//     <p class="card-text">The ${element.name} is ${element.nationality}</p>
    
//     <button onclick=""> Delete</button>
//     <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn" ></i></a>

    
    
//   </div>
// </div>  `
// });

// axios("http://localhost:3000/meals").then((res) => {
//   let data = res.data;
//   let element = data.find((elem) => elem.id == id);
//   console.log(element);
//   container.innerHTML=`  <div class="card" style="width:90%; height:700px">
//   <img src="${element.imgLink}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">The ${element.name}</h5>
//     <p class="card-text"> ${element.ingredients}</p>
    
//     <button onclick=""> Delete</button>
//     <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn" ></i></a>

    
    
//   </div>
// </div>  `
// });

let id = new URLSearchParams(location.search).get("id");
let container = document.querySelector(".container");

// Singer bilgilerini çekme
axios.get("http://localhost:3000/singers")
  .then((res) => {
    let data = res.data;
    let element = data.find((elem) => elem.id == id);

    if (element) {
      container.innerHTML = `
        <div class="card" style="width:90%; height:700px">
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">The ${element.name}</h5>
            <p class="card-text">The ${element.name} is ${element.nationality}</p>
            <button onclick=""> Delete</button>
            <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn"></i></a>
          </div>
        </div>
      `;
    } else {
      console.error(`Singer with id ${id} not found`);
    }
  })
  .catch(error => {
    console.error(error);
  });

// Yemek bilgilerini çekme
axios.get("http://localhost:3000/meals")
  .then((res) => {
    let data = res.data;
    let element = data.find((elem) => elem.id == id);

    if (element) {
      container.innerHTML = `
        <div class="card" style="width:90%; height:700px">
          <img src="${element.imgLink}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">The ${element.name}</h5>
            <p class="card-text">${element.ingredients}</p>
            <button onclick=""> Delete</button>
            <a href="" class="btn btn-primary"><i class="fa-solid fa-cart-shopping cartBtn"></i></a>
          </div>
        </div>
      `;
    } else {
      console.error(`Meal with id ${id} not found`);
    }
  })
  .catch(error => {
    console.error(error);
  });
