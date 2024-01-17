document.addEventListener('DOMContentLoaded', () => {
     let xx = document.querySelector(".xx");
     let oo = document.querySelector(".oo");
     let pickx = document.querySelector(".pickx");
     let picko = document.querySelector(".picko");
     document.querySelector("#c1").addEventListener('click', () => {
               if (pickx.checked == true) {
                    xx.style.display = "block";
               } else if (picko.checked == true) {
                    oo.style.display = "block";
               } else {
                    alert("Please select a player");
               }
          });
});