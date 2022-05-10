// Global variables
const menuBtn = document.querySelector('.menu');
const cart = document.querySelector('.cart');
const cartWrapper = document.querySelector('.cart-wrapper');
const closeBtn = document.querySelector('.close');
const navWrapper = document.querySelector('.nav-wrapper');

// Menu Toggler
menuBtn.addEventListener('click', (e) => {
    navWrapper.classList.toggle('show-nav');
})
closeBtn.addEventListener('click', (e) => {
    navWrapper.classList.toggle('show-nav');
    e.stopPropagation();
})
navWrapper.addEventListener('click', (e) => {
    navWrapper.classList.toggle('show-nav');
})

// Cart Toggler
cart.addEventListener('click', (e) => {
    cartWrapper.classList.toggle('show-cart');
    e.stopPropagation();
})

// Choosing quantity to cart
const cartBtns = document.querySelectorAll('.cart-btn');
let count = 0;
const qtyFigure = document.querySelector('.qty-figure');
cartBtns.forEach( cartBtn => {
    cartBtn.addEventListener('click', (e) => {
        let clicked = e.target.classList;
        if(clicked.contains('add')){
            count++;
        } else if(clicked.contains('subtract')){
            if(qtyFigure.innerText <= 0){
                count = 0;
            } else {
                count--;
            }
        }
        qtyFigure.innerText = count;
    })
})

// Adding quantity to cart counter
// const cartCount = document.querySelector('.cart-count');
// const addToCartBtn = document.querySelector('.add-to-cart-btn');
// addToCartBtn.addEventListener('click', () => {
//     if(qtyFigure <= 0){
//
//     } else {
//         cartCount.style.display = 'block';
//         cartCount.innerText = qtyFigure;
//     }
// })


