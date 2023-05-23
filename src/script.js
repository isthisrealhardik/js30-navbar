const navbar = document.getElementById('pop')
let menu = document.getElementById('Menu')
const close = document.getElementById('close')
let product = document.getElementById('product')

product.addEventListener('click', () => {
    navbar.style.display = 'block';
})

menu.addEventListener('click', () => {
    navbar.style.display = 'block';
})

close.addEventListener('click', () => {
    navbar.style.display = 'none';
})