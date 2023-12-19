document.querySelector(".addcart").style.display = "none";
document.querySelector(".ggg").style.display = "none";
function adddd() {
     let badge = document.querySelector(".badge")
     let dig = document.querySelector(".dig")
     num = Number(badge.innerText) + 1
     badge.innerText = num
     dig.innerText = num
     if (num > 0) {
          document.querySelector(".card").removeEventListener
     }
}
function reduce() {
     let badge = document.querySelector(".badge")
     let dig = document.querySelector(".dig")
     num = Number(badge.innerText) - 1;
     if (num <= 0) {
          let btn = document.querySelector(".ggg")
          btn.style.display = "none"
     }
     badge.innerText = num
     dig.innerText = num
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
