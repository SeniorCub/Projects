fetch('https://fakestoreapi.com/products?limit=12')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
document.querySelector('.cards').innerHTML += `


     <div class="p-2 col-lg-3 col-md-5 col-10 card">
          <div class="img">
               <img src="${element.image}" alt="....">
          </div>
          <div class="tag">Official Store</div>
          <div class="name">
               ${element.title}
          </div>
          <div class="price">
               <div class="new">$${element.price}</div>
               <div class="">
                    <span class="old"> #71,000</span>
                    <span class="dis">${element.rating.rate}</span>
               </div>
          </div>
          <div class="rate">
               <i class="bi bi-star-fill"></i>
               <i class="bi bi-star-fill"></i>
               <i class="bi bi-star-fill"></i>
               <i class="bi bi-star-half"></i>
               <i class="bi bi-star"></i>(26)
          </div>
          <div class="deli">
               Jumia <span class="exp"><i class="bi bi-send-fill"></i>Express</span>
          </div>
          <div class="btn btnn addcart">ADD TO CART</div>
          <div class="ggg">
               <div class="d-flex btnnn addition">
                    <div class="btn btnn bt minus">-</div>
                    <span class="dig">1</span>
                    <div class="btn btnn bt plus">+</div>
               </div>
          </div>
     </div>
`

}));


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
     cart()
})
document.querySelectorAll(".minus").addEventListener("click",()=>{
    reduce()
})
document.querySelector(".plus").addEventListener("click",()=>{
     adddd()
})
document.querySelector(".car").addEventListener("click",()=>{
     let cartmenu = document.querySelector(".carts")
     
     // //  Finally, a ternary operator is used to toggle the display property of the "carts" element. If extended is true (i.e., the element is currently visible), the display property is set to "none", which hides the element. If extended is false (i.e., the element is currently hidden), the display property is set to "block", which makes the element visible.

     let extended = cartmenu.style.display === "block"
     cartmenu.style.display = extended? "none" : "block"
})
function cart() {
     document.querySelector(".goods").innerHTML = `
                         <div class="good">
                              <div class="goo">
                                   <div class="img">
                                        <img src="1.jpg" alt="....">
                                  </div>
     
                                  <div class="tavvv">
                                        <div class="name">
                                             XIAOMI Redmi A2 + 6.52*2GB RAM/32GB ROM Android 12 - Black
                                        </div>
                                        <div class="expp">Few units left</div>
                                        <div class="deli">
                                             Jumia <span class="exp"><i class="bi bi-send-fill"></i>Express</span>
                                       </div>
                                  </div>
     
                                  <div class="price">
                                        <div class="new">#61,800</div>
                                        <div class="">
                                             <span class="old"> #71,000</span>
                                             <span class="dis">-13%</span>
                                        </div>
                                  </div>
                              </div>

                              <div class="gpoo">
                                   <div class="btn btttt"><i class="bi bi-basket3-fill"></i>  REMOVE</div>
                                   <div class="ggg">
                                         <div class="d-flex btnnn addition">
                                              <div class="btn btnn bt minus">-</div>
                                              <span class="dig">1</span>
                                              <div class="btn btnn bt plus">+</div>
                                         </div>
                                   </div>
                              </div>
                         </div>
                         `
}