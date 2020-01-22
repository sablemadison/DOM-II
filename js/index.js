// Your code goes here
let buttons = document.querySelectorAll('.btn')

buttons[0].addEventListener('mouseover', (event)=> {event.target.style.width = "25rem"})

console.log(buttons)

buttons[1].addEventListener('click', (event)=> { event.target.style.width= "12rem"})

buttons[2].addEventListener('mouseenter', (event)=> {event.target.style.width = "25rem"})

buttons.forEach(btn => {btn.addEventListener('mouseleave',(event)=> {event.target.style.width="15rem"} )})

let imgs = document.querySelectorAll('img')

imgs[0].addEventListener('click', (event)=> {event.target.style.opacity="0.1"})

imgs[0].addEventListener('dblclick', (event)=> {event.target.style.opacity="10"})
let h2 = document.querySelector('h2')

h2.addEventListener('copy', (event) => { event.target.textContent = 'Are YOU attempting to plagiarize?'})
h2.addEventListener('paste', (event)=> {event.target.textContent = "Don't paste it, copying is bad enough"})

document.addEventListener('scroll', (event)=> {document.body.style.backgroundColor='grey'})

window.addEventListener('resize', (event)=> {alert('The window was resized') })

document.addEventListener('keypress', (event)=> {document.body.style.backgroundColor='green'})

let navLinks = document.querySelectorAll('a')

navLinks.forEach(addEventListener('mousemove', (event)=> {event.target.style.fontSize ="2rem"
event.target.style.color='pink'}))