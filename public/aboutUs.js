buildAboutUs();

function buildAboutUs() {

    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.className = 'text-center';
    aboutUsTitle.innerHTML = 'About Us';
    aboutUs.appendChild(aboutUsTitle);





    const topDiv = document.createElement('div');
    topDiv.setAttribute('id', 'topdiv');
    topDiv.className = '';
    aboutUs.appendChild(topDiv);

    const person1Div = document.createElement('div');
    person1Div.className = 'float-start';
    topDiv.appendChild(person1Div);

    const p1Title = document.createElement('h2');
    p1Title.className = 'float-start ml-2';
    p1Title.innerHTML = 'Axel';
    topDiv.appendChild(p1Title);

};