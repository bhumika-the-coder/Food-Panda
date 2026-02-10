const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 160)
});

let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector(".navlinks");

menu.onclick = ()=>{
    menu.classList.toogle('bx-x');
    navlinks.classList.toogle('open');
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlinks.classList.remove('open');
}

const animate = ScrollReveal({
    origin:'top',
    distance:'70px',
    duration:'2500',
    delay:'400'
});

animate.reveal(".home-left,mid-text,features-img,social-icons",{origin:"left"})

animate.reveal(".home-right,.features-text",{origin:"right"});

animate.reveal(".services-content,.menu-content,.menu-btn,.contact-content,.copyright,.scroll-btn",{interval:160})