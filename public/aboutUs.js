console.log('hello from about us');

buildAboutUs();

function buildAboutUs() {

    const topDiv = document.createElement('div');
    topDiv.setAttribute('id', 'topdiv');
    topDiv.className = '';

    aboutUs.appendChild(topDiv);

    const aboutUsTitleDiv = document.createElement('div');
    aboutUsTitleDiv.className = '';
    aboutUs.appendChild(aboutUsTitleDiv);

    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.className = '';
    aboutUsTitle.innerHTML = 'About Us';
    aboutUsTitleDiv.appendChild(aboutUsTitle);



};