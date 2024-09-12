// Your code goes here
//creating a function to make multiple areas appear the same after different things are done to them
function makePretty(event) {
    whiteLetters()
    pinkBackground()
}
// My Selectors
//header 
const mainNav = document.querySelector('.main-navigation')
//nav buttons
const navLinks = document.querySelector('nav')
//top section
const topSection = document.querySelector('.intro')
//top bus picture
const busImage = document.querySelector('.intro img')

// footer
const footer = document.querySelector('.footer')

// images

const image = document.querySelector('img')

// text content
const textContent = document.querySelector('.text')
const contentSection = document.querySelector('.section')

// 1) My Color Changing With 'mouseenter'
mainNav.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})
navLinks.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
    navLinks.textContent.style.color = 'white'
})
// 2) My Color Changing With 'mouseleave'
mainNav.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'initial'
    event.target.style.color = 'black'
})
navLinks.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
})


// 3) mouseover

footer.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})

// 4) mouseout
footer.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'initial'
    event.target.style.color = 'black'
})

// 5) click
// Also stop the navigation items from refreshing the page by using `preventDefault()`
Array.from(document.links).forEach(function(link){
    link.addEventListener('click', function (event) {
        event.preventDefault()
    })
})
busImage.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'pink'
})

// 6) dblclick
busImage.addEventListener('dblclick', (event) => {
    document.body.style.backgroundColor = 'initial'
})
//  7) focus
topSection.addEventListener('focus', (event) => {
    event.target.style.background = 'pink'
})



// 8) wheel
window.addEventListener('wheel', function() {
    document.body.style.color = 'pink'
})

// 9) resize

// 10) select


//Helper functions to make some of the code more readable

function whiteLetters(){
    target.style.color ='white'
}

function pinkBackground() {
    target.style.color ='pink'
}

function pinkLetters(){
    target.style.color = 'pink'
}