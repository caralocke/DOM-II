// Your code goes here

// My Selectors
//header 
const mainNav = document.querySelector('.main-navigation')
//nav buttons
const navLinks = document.querySelector('a')


// footer
const footer = document.querySelector('.footer')

// images

const image = document.querySelector('.img')

// text content
const textContent = document.querySelector('.text')
const contentSection = document.querySelector('.section')

// My Color Changing With 'mouseenter'
mainNav.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})
navLinks.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})
// contentSection.addEventListener('mouseenter', event => {
//     event.target.style.backgroundColor = 'pink'
//     event.target.style.color = 'white'
// })
//My Color Changing With 'mouseleave'
mainNav.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
})
navLinks.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
})

// keydown

// wheel


//resize

//select

//mouseover

footer.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})

//mouseout
footer.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
})

//Stop the navigation items from refreshing the page by using `preventDefault()`
Array.from(document.links).forEach(function(link){
    link.addEventListener('click', function (event) {
        event.preventDefault()
    })
})