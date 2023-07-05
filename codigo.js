const cabecera = document.querySelector('.logo');
cabecera.addEventListener('mousemove', function(){
    cabecera.classList.toggle('logo-cambio');
});

const miFoto = document.querySelector('.foto-personal');

miFoto.addEventListener('mousemove', function(){
    miFoto.classList.toggle('imagen-cambio');
});

const btnMenu = document.getElementById('btn-menu');
const menu = document.querySelector('.menu-nav');
btnMenu.addEventListener('click', function(){
    menu.classList.toggle('menu-nav');

});
