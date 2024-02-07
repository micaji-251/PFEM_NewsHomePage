// DEFINIR VARIABLES

const header = document.querySelector('header');
const navBar = document.querySelector('.navBar');
const blackScreen = document.getElementById('blackScreen')

// LISTENERS

loadListeners();

function loadListeners(){
    header.addEventListener('click', openMenu);
}

function openMenu(e){
    if(e.target.classList.contains('openBtn')){
        const openBtn = e.target;
        openBtn.classList.add('noneMobile');
        navBar.classList.remove('noneMobile');
        blackScreen.classList.add('blackScreen');
    }

    if(e.target.classList.contains('closeBtn')){
        navBar.classList.add('noneMobile');
        const openBtn = header.querySelector('.openBtn');
        openBtn.classList.remove('noneMobile');
        blackScreen.classList.remove('blackScreen');
    }
}

// FUNCIONES