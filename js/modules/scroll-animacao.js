export  function initAnimacaoScrollLeft(){
    const elements = document.querySelectorAll('[data-anime="scroll-left"]');
    const windowMetade = window.innerHeight * 0.6;

    function ativarScrollLeft(){
        elements.forEach((element) =>{
        const distanciaTop = element.getBoundingClientRect().top - windowMetade;
        if(distanciaTop < 0){ 
           element.classList.add('ativo');
        }
    })
   
}

window.addEventListener('scroll', ativarScrollLeft);
}

export  function initAnimacaoScrollRight(){
    const elements = document.querySelectorAll('[data-anime="scroll-right"]');
    const windowMetade = window.innerHeight * 0.6;

    function ativarScrollLeft(){
        elements.forEach((element) =>{
        const distanciaTop = element.getBoundingClientRect().top - windowMetade;
        if(distanciaTop < 0){ 
           element.classList.add('ativo');
        }
    })
   
}

window.addEventListener('scroll', ativarScrollLeft);
}

export  function initAnimacaoScrollDown(){
    const elements = document.querySelectorAll('[data-anime="scroll-down"]');
    const windowMetade = window.innerHeight * 0.6;

    function ativarScrollLeft(){
        elements.forEach((element) =>{
        const distanciaTop = element.getBoundingClientRect().top - windowMetade;
        if(distanciaTop < 0){ 
           element.classList.add('ativo');
        }
    })
   
}

window.addEventListener('scroll', ativarScrollLeft);
}

export  function initAnimacaoScrollUp(){
    const elements = document.querySelectorAll('[data-anime="scroll-up"]');
    const windowMetade = window.innerHeight * 0.6;

    function ativarScrollLeft(){
        elements.forEach((element) =>{
        const distanciaTop = element.getBoundingClientRect().top - windowMetade;
        if(distanciaTop < 0){ 
           element.classList.add('ativo');
        }
    })
   
}

window.addEventListener('scroll', ativarScrollLeft);
}

