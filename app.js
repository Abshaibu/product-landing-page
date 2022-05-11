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
const cartSummary = document.querySelector('.cart-summary');
const emptyCart = document.querySelector('.empty-cart');
const productName = document.querySelector('.product-name');
const priceTag = document.querySelector('.price-tag');
cart.addEventListener('click', () => {
    cartWrapper.classList.toggle('show-cart');
    if(count > 0) {
        emptyCart.style.display = 'none';
        cartSummary.innerHTML = `<div class="cart-item">
        <div class="product">
          <div><img class="cart-img" src="./images/image-product-1.jpg"
                    alt="image of a shoe"></div>
          <div class="item-details">
            <p class="item-name">${productName.innerText}</p>
            <p
                    class="item-amount">$<span class="item-price"
            >${priceTag.innerText}</span> x <span class="item-quantity">
            </span>${cartFigure} <span class="dollar-total">$</span><span
                    class="item-total">${cartFigure * priceTag.innerText}</span></p>
          </div>
          <button class="delete-item"><img src="./images/icon-delete.svg"
                                           alt="a thrash can icon"></button>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>`;
        // Deleting a product
        const deleteBtn = document.querySelector('.delete-item');
        deleteBtn.addEventListener('click', () => {
            cartSummary.innerHTML = emptyCart.innerHTML;
            cartCount.style.display = 'none';
        })
    }
})