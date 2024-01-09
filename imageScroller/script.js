document.querySelector('.butto').addEventListener('click', previousslide);
document.querySelector('.button').addEventListener('click', nextslide);

const immm = ['./Quotes/1.png','./Quotes/2.png','./Quotes/3.png','./Quotes/4.png','./Quotes/5.png','./Quotes/Quote with verse (1).png','./Quotes/Quote with verse (2).png']

let currentIndex = 0;

function changeImage() {
    let imgElement = document.querySelector('.img img');
    imgElement.classList.add('fade-out');

    setTimeout(() => {
        imgElement.src = immm[currentIndex];
        imgElement.classList.remove('fade-out');
        imgElement.classList.add('fade-in');
    }, 250);

    setTimeout(() => {
        imgElement.classList.remove('fade-in');
    }, 500);
}

function previousslide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : immm.length - 1; // If it's the first image, go to the last one
    changeImage();
}

function nextslide() {
    currentIndex = (currentIndex < immm.length - 1) ? currentIndex + 1 : 0; // If it's the last image, go to the first one
    changeImage();
}