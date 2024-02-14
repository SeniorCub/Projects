document.querySelector(".carts").style.display = "none";
// For the Cart
document.querySelector(".car").addEventListener("click",()=>{
     let cartmenu = document.querySelector(".carts")
     
     // //  Finally, a ternary operator is used to toggle the display property of the "carts" element. If extended is true (i.e., the element is currently visible), the display property is set to "none", which hides the element. If extended is false (i.e., the element is currently hidden), the display property is set to "block", which makes the element visible.

     let extended = cartmenu.style.display === "block"
     cartmenu.style.display = extended? "none" : "block"
})


let list = document.querySelector(".list");
let listCard = document.querySelector(".listcard");
let body = document.querySelector("body");
let total = document.querySelectorAll(".total");
let quantity = document.querySelector(".quantity");



let products = [
     {
          id: 1,
          name: 'PRODUCT 1',
          image: '1.jpg',
          price: 120000
     },
     {
          id: 2,
          name: 'PRODUCT 2',
          image: '2.jpg',
          price: 100000
     },
     {
          id: 3,
          name: 'PRODUCT 3',
          image: '3.jpg',
          price: 150000
     },
     {
          id: 4,
          name: 'PRODUCT 4',
          image: '4.jpg',
          price: 70000
     },
     {
          id: 5,
          name: 'PRODUCT 5',
          image: '1.jpg',
          price: 200000
     },
     {
          id: 6,
          name: 'PRODUCT 6',
          image: '2.jpg',
          price: 250000
     }
];

let listCards =[];

function initApp () {
     products.forEach((value, key) => {
          let newDiv = document.createElement('div');
          newDiv.classList.add('item');
          newDiv.innerHTML = `
          <img src="${value.image}" alt="product" width="100px">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(event, ${key})">Add To Cart</button>
          `;
          list.appendChild(newDiv);
     })
}
initApp();

function addToCard(event, key) {
     event.preventDefault();
     if (listCards[key] == null) {
          listCards[key] = {...products[key], quantity: 1};
     }
     reloadCard();
}

function reloadCard() {
     listCard.innerHTML = ``;
     let count = 0;
     let totalPrice = 0;
     listCards.forEach((value, key) => {
          totalPrice = totalPrice + value.price;
          count = count + value.quantity;

          if (value != null) {
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
               <div><img src="${value.image}" alt="" width=""></div>
               <div>${value.name}</div>
               <div>${value.price.toLocaleString()}</div>
               <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
               </div>
          `;
          listCard.appendChild(newDiv);
          }
     })
     total.forEach((value) => {
          value.innerText = totalPrice.toLocaleString();
     })
     quantity.innerText = count;
}

function changeQuantity(key, quantity) {
     if (quantity == 0) {
          delete listCards[key];
     }else {
          listCards[key].quantity = quantity;
          listCards[key].price = quantity * products[key].price;
     }
     reloadCard();
}
