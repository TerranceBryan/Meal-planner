
//Sidebar
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    navigation.classList.toggle('active')
}

// Menu Bar
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header .navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}