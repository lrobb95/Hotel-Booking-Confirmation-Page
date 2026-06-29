const getBtn = document.querySelector('.mobile-menu');
const getNav = document.getElementById('mobile-nav');
const getClose = document.getElementById('close-menu');

getBtn.addEventListener('click', () => {
    getNav.classList.add('active')
})

getClose.addEventListener('click', () => {
    getNav.classList.remove('active');
})