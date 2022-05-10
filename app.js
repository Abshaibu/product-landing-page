// Global variables
const menuBtn = document.querySelector('.menu');
const cart = document.querySelector('.cart');
const cartWrapper = document.querySelector('.cart-wrapper');
const closeBtn = document.querySelector('.close');
const navWrapper = document.querySelector('.nav-wrapper');
const quantityBtns = document.querySelector('.quantity-wrapper');

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

// Adding quantity to cart
quantityBtns.addEventListener('click', (e) => {
    if()
})