export default function initAnimacaoScrollLeft(){

}

const elements = document.querySelectorAll('[data-scroll-left]');
const windowMetade = window.innerHeight * 0.6;
console.log(windowMetade)

function ativarScrollLeft(){
    elements.forEach((element) =>{
        const distanciaTop = element.getBoundingClientRect().top - windowMetade;
        console.log(distanciaTop);
    })
   
}

window.addEventListener('scroll', ativarScrollLeft);