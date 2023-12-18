document.addEventListener("DOMContentLoaded", function() {
     var btnnnAddition = document.querySelector(".btnnn.addition");
   
     if (btnnnAddition) {
       // Add a class to hide the element
       btnnnAddition.classList.add("hidden");
     }
   });

document.querySelector(".addcart").style.display = "none";
document.querySelector(".card").addEventListener("mouseover",()=>{
     let btnn = document.querySelector(".addcart")
     btnn.style.display = "block"
})
document.querySelector(".card").addEventListener("mouseout",()=>{
     let btnn = document.querySelector(".addcart")
     btnn.style.display = "none"
})

document.querySelector(".addcart").addEventListener("click",()=>{
     document.querySelector(".btnnn.addition").
})