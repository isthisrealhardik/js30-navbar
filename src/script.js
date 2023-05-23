const navbar = document.getElementById('pop')
let menu = document.getElementById('Menu')
const close = document.getElementById('close')

menu.addEventListener('click', () => {
    navbar.style.display = 'block';
})

close.addEventListener('click', () => {
    navbar.style.display = 'none';
})