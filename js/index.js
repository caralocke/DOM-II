// Your code goes here
// Selectors

const mainNav = document.querySelector('.main-navigation')
const navLinks = document.querySelectorAll('a')
const intro = document.querySelector('.intro')

mainNav.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})

mainNav.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'initial'
    event.target.style.color = 'initial'
})

navLinks.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'black'
    navLinks.textContent.style = 'teal'
})

