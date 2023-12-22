document.querySelector(".addcart").style.display = "none";
document.querySelector(".ggg").style.display = "none";
document.querySelector(".carts").style.display = "none";
function adddd() {
     let badge = document.querySelector(".badge")
     let dig = document.querySelector(".dig")
     let nnn = document.querySelector(".nnn")
     num = Number(badge.innerText) + 1
     badge.innerText = num
     dig.innerText = num
     nnn.innerText = num
     if (num > 0) {
          document.querySelector(".card").removeEventListener
     }
}
function reduce() {
     let badge = document.querySelector(".badge")
     let dig = document.querySelector(".dig")
     let nnn = document.querySelector(".nnn")
     num = Number(badge.innerText) - 1;
     if (num <= 0) {
          let btn = document.querySelector(".ggg")
          btn.style.display = "none"
     }
     badge.innerText = num
     dig.innerText = num
     nnn.innerText = num
}
document.querySelector(".card").addEventListener("mouseover",()=>{
     let btnn = document.querySelector(".addcart")
     btnn.style.display = "block"
})
document.querySelector(".card").addEventListener("mouseout",()=>{
     let btnn = document.querySelector(".addcart")
     btnn.style.display = "none"
})
document.querySelector(".addcart").addEventListener("click",()=>{
     let btnn = document.querySelector(".addcart")
     btnn.style.display = "none"
     let btn = document.querySelector(".ggg")
     btn.style.display = "block"
     adddd()
})
document.querySelector(".minus").addEventListener("click",()=>{
    reduce()
})
document.querySelector(".plus").addEventListener("click",()=>{
     adddd()
})
document.querySelector(".car").addEventListener("click",()=>{
     let cartmenu = document.querySelector(".carts")
     
     //  Finally, a ternary operator is used to toggle the display property of the "carts" element. If extended is true (i.e., the element is currently visible), the display property is set to "none", which hides the element. If extended is false (i.e., the element is currently hidden), the display property is set to "block", which makes the element visible.

     let extended = cartmenu.style.display === "block"
     cartmenu.style.display = extended? "none" : "block"
})
