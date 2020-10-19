import '../sass/index.scss';

console.log('Congratulate! This script is working!')

window.onload=function(){
    const menuBtn = document.querySelector('.btn-burger');
    const menuBtnIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.side-menu');
    const shift = document.querySelectorAll('.shift');
    
    
    menuBtn.addEventListener('click', ()=>{
        menuBtnIcon.classList.toggle('open');
        menu.classList.toggle('open');
        shift.forEach(element => {
           element.classList.toggle('open'); 
        });
        
    })
}