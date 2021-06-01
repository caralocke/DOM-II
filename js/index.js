// Your code goes here
// Selectors

const mainNav = document.querySelector('.main-navigation')
const intro = document.querySelector('.intro')
const subTitles = document.querySelectorAll('h2')
const explanation = document.querySelectorAll('p')
const title = document.querySelector('h1')

title.addEventListener('')

mainNav.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'white'
})

mainNav.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'initial'
    event.target.style.color = 'initial'
})
//adding event listeners to my nav links
Array.from(document.links).forEach(link => {
    link.addEventListener('mouseenter', event => {
        event.target.style.color = 'white'
        event.target.style.backgroundColor = 'cyan'
    })
})
Array.from(document.links).forEach(link => {
    link.addEventListener('mouseleave', event => {
        event.target.style.color = 'initial'
        event.target.style.backgroundColor = 'initial'
    })
})

//wheel on my h2's
console.log('subTitles:', subTitles)
Array.from(subTitles).forEach(subTitle => {
    subTitle.addEventListener('wheel', event => {
        subTitle.style.color = 'teal'
        event.stopPropagation()
    })
})

//click to change the area to cyan background with white text

intro.addEventListener('click', event => {
    event.target.style.backgroundColor = 'cyan'
    event.target.style.color = 'white'
})

//dblclick to change the listed areas back to their initial settings

intro.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = 'initial'
    event.target.style.color = 'initial'
})
console.log(subTitles)
document.addEventListener('scroll', event => {
    subTitles.textContent.style.color = 'pink'
})
