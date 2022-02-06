import loadPage from './modules/loadInitPage.js';
import loadMenu from './modules/loadMenu.js';
import loadHome from './modules/loadHome.js';

init();

function addNavEvents(){
    const homebtn = document.getElementById('home');
    const menubtn = document.getElementById('menu');

    homebtn.addEventListener('click',loadHome);
    menubtn.addEventListener('click',loadMenu);
}

function init(){
    loadPage();
    loadHome();
    addNavEvents();
}