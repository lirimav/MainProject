function createHeader(id,text){
    const header = document.createElement('header');
    header.setAttribute('id',id);
    const h1 = document.createElement('h1');
    h1.innerHTML = text;
    header.appendChild(h1);
    return header;
}

function createBtn(id,text){
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.innerHTML = text;
    return btn;
}

function createNav(id){
    const navi = document.createElement('nav');
    navi.setAttribute('id',id);

    const homebtn = createBtn('home','Home');
    const menubtn = createBtn('menu','Menu');
    //const aboutbtn = createBtn('about','About');

    navi.appendChild(homebtn);
    navi.appendChild(menubtn);
    //navi.appendChild(aboutbtn);

    return navi;
}
function createMain(id){
    const main = document.createElement('main');
    main.setAttribute('id',id);
    return main;
}
function loadPage(){
    console.log('called loadPage');

    const content = document.getElementById('content');

    const header = createHeader('header','DOPE STUFF');
    content.appendChild(header);

    const nav = createNav('navi');
    content.appendChild(nav);

    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
   
}
export default loadPage;


