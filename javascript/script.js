let screenWidth = window.innerWidth;
let menuIcon = document.querySelector(".menu_icon");
let navBar = document.querySelector(".navbar");

window.addEventListener('load', ()=> {
    menuIcon.classList.remove('clicked')
})

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('clicked');
    navBar.classList.toggle("md-820");
})

if (screenWidth > 820) {
    menuIcon.classList.remove("clicked")
    navBar.classList.remove("md-820");
}

// alert(screenWidth)