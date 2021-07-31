import debounce from './debounce.js'

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
 const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
 target.forEach(function(el) {
     if((windowTop) > el.offsetTop) {
         el.classList.add(animationClass);
         el.classList.add('active')
         

     } else {
         el.classList.remove(animationClass);
         el.classList.remove('active')
     }

 })
}

animeScroll();


window.addEventListener('scroll', debounce(function() {
    animeScroll();
}, 200))
