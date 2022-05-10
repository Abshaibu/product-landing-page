const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navWrapper = document.querySelector('.nav-wrapper');
menuBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('show-nav');
})

closeBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('show-nav');
})

navWrapper.addEventListener('click', () => {
    navWrapper.classList.toggle('show-nav');
})