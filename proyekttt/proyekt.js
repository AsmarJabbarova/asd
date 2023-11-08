let description=document.querySelector(".description")
let lorem=document.querySelector(".lorem")

let reviews=document.querySelector(".reviews")

let rev_comment=document.querySelector(".rev-comment")

description.addEventListener("click",function(){
            lorem.style.display="flex"
    rev_comment.style.display="none"


})

reviews.addEventListener("click",function(){
    lorem.style.display="none"
    rev_comment.style.display="flex"
})