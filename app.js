// Global variables
const menuBtn = document.querySelector('.menu');
const cart = document.querySelector('.cart');
const cartWrapper = document.querySelector('.cart-wrapper');
const closeBtn = document.querySelector('.close');
const navWrapper = document.querySelector('.nav-wrapper');

// Menu Toggle
menuBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('show-nav');
})
closeBtn.addEventListener('click', (e) => {
    navWrapper.classList.toggle('show-nav');
    e.stopPropagation();
})
navWrapper.addEventListener('click', () => {
    navWrapper.classList.toggle('show-nav');
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
const cartCount = document.querySelector('.cart-count');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
let cartFigure = 0
addToCartBtn.addEventListener('click', () => {
    if(count > 0){
        cartFigure += count;
        cartCount.style.display = 'block';
        cartCount.innerText = cartFigure;
    }
})

// Cart Toggle and item adding to cart
const productName = document.querySelector('.product-name');
const itemName = document.querySelector('.item-name');
const itemTotal = document.querySelector('.item-total');
const itemQuantity = document.querySelector('.item-quantity');
const priceTag = document.querySelector('.price-tag');
const itemPrice = document.querySelector('.item-price');
cart.addEventListener('click', () => {
    cartWrapper.classList.toggle('show-cart');
})