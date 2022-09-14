console.log('hello from navbar');

buildNavBar();

function buildNavBar() {
    
    const divNavBar = document.getElementById('navBar');
    divNavBar.className = 'p-3 d-flex  sticky-top';

    const titleHome = document.createElement('h1');
    titleHome.setAttribute('name', 'headerNavBar');
    titleHome.innerHTML = 'SP-AICE';
    titleHome.className = 'ms-4 w-25 float-start';
    divNavBar.appendChild(titleHome);

    const btnProjects = document.createElement('btn');
    btnProjects.className = 'btn border-0';
    btnProjects.setAttribute('id', 'btnProjects');
    btnProjects.innerHTML = '<h1>Projects</h1>';
    divNavBar.appendChild(btnProjects);

    const btnEducation= document.createElement('btn');
    btnEducation.setAttribute('id', 'btnEducation');
    btnEducation.className = 'btn border-0';
    btnEducation.innerHTML = '<h1>Education</h1>';
    divNavBar.appendChild(btnEducation);

    const btnPolicy= document.createElement('btn');
    btnPolicy.setAttribute('id', 'btnPolicy');
    btnPolicy.className = 'btn border-0';
    btnPolicy.innerHTML = '<h1>Policy</h1>';
    divNavBar.appendChild(btnPolicy);

};  