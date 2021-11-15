// show menu hidden

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navBar = document.getElementById('header'),
    sideBar = document.getElementById('sidebar__icons');


// toggle menu
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.toggle('show-menu')
    })
}

navToggle.addEventListener('click', changeToggleIcon)

function changeToggleIcon(){
    document.getElementById('toggle-icon').classList.toggle("bx-x");
}


//remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=> n.addEventListener('click', linkAction))

//nav bar

const navHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if (window.scrollY > navHeight){
        navBar.classList.add('nav__dark');
    }else{
        navBar.classList.remove('nav__dark');
    }

})

