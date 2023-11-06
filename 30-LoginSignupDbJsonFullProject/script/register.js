// let formRegister = document.querySelector(".formRegister")
// let inpUsername = document.querySelector(".inpUsername")
// let inpEmail = document.querySelector(".inpEmail")
// let inpPassword = document.querySelector(".inpPassword")
// let inpBalance = document.querySelector(".inpBalance")

// formRegister.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(inpPassword.value.search(/[A-Z]/)<0){
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Password must have at least 1 capital letter.!',
//             footer: '<a href=""></a>'
//           })
//     } else{ 
       
       
        
//         axios.post("http://localhost:3000/users",{
//         email: inpEmail.value,
//         username: inpUsername.value,
//         password: inpPassword.value,
//         balance: inpBalance.value
//     })
//     document.location.href="./login.html"}
  
// });



let formRegister = document.querySelector(".formRegister")
let inpUsername = document.querySelector(".inpUsername")
let inpEmail = document.querySelector(".inpEmail")
let inpPassword = document.querySelector(".inpPassword")
let inpBalance = document.querySelector(".inpBalance")

// formRegister.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     axios("http://localhost:3000/users")
//     .then((res)=>{
//         let users = res.data;
//         if( x = users.find((x)=>x.username == usernameInput.value)){
//                     Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Password must have at least 1 capital letter.!',
//             footer: '<a href=""></a>'
//           })
        
//         }
//         else{
//             if(inpPassword.value.search(/[A-Z]/)<0){
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Password must have at least 1 capital letter.!',
//         footer: '<a href=""></a>'
//       })
// } else{ 
   
   
    
//     axios.post("http://localhost:3000/users",{
//     email: inpEmail.value,
//     username: inpUsername.value,
//     password: inpPassword.value,
//     balance: inpBalance.value
// })
// document.location.href="./login.html"}
//         }
//     })
// });



formRegister.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios("http://localhost:3000/users")
    .then((res)=>{
        let users = res.data;
        if( x = users.find((x)=>x.username == inpUsername.value)){
                    Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username already exists!',
            footer: '<a href=""></a>'
          })
        
        }
        else{
            if(inpPassword.value.search(/[A-Z]/)<0){
    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must have at least 1 capital letter.!',
        footer: '<a href=""></a>'
      })
} else{ 
   
   
    
    axios.post("http://localhost:3000/users",{
    email: inpEmail.value,
    username: inpUsername.value,
    password: inpPassword.value,
    balance: inpBalance.value
})
document.location.href="./login.html"}
        }
    })
});














// if(inpPassword.value.search(/[A-Z]/)<0){
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Password must have at least 1 capital letter.!',
//         footer: '<a href=""></a>'
//       })
// } else{ 
   
   
    
//     axios.post("http://localhost:3000/users",{
//     email: inpEmail.value,
//     username: inpUsername.value,
//     password: inpPassword.value,
//     balance: inpBalance.value
// })
// document.location.href="./login.html"}