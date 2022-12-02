const menu = document.getElementById('menu')
const nav = document.getElementById('nav')


menu.addEventListener('click',()=>{
    console.log('clicked')
    nav.classList.toggle('activeNav')
 
    menu.classList.toggle('activeClose')

})

