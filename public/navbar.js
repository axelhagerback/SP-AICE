console.log('hello from navbar');

buildNavBar();

function buildNavBar() {
    
    const divNavBar = document.getElementById('navBar');
    divNavBar.className = 'border border-dark p-3 bg-primary d-flex sticky-top';

    const titleHome = document.createElement('h1');
    titleHome.setAttribute('name', 'header');
    titleHome.innerHTML = 'SP-AICE';
    titleHome.className = 'ms-4 w-25 float-start';
    divNavBar.appendChild(titleHome);
    
};  