const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
    console.log('open');
    
    if(header.classList.contains('open')){ // close hamburger
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { 
        header.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }
})


