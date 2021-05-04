// Your code goes here

// My Selectors
//entire header nav
const mainNav = document.querySelector('.main-navigation')

//entire body
const body = document.body.querySelector('.home')

// footer
const footer = document.querySelector('.footer')

// images

const image = document.querySelector('.img')

// text content
const textContent = document.querySelector('.text')

// My Color Changing With 'mouseenter'
mainNav.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
})
//My Color Changing With 'mouseleave'
mainNav.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'white'
})

// keydown

//mousemove
// textContent.addEventListener('mousemove', event => {
//     event.target.style.color = 'pink'
// })

//load
footer.addEventListener('load', event => {
    event.target.style.backgroundColor = 'white'
})
//scroll
body.addEventListener('scroll', event =>{
    event.target.style.backgroundColor = 'pink'
})
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