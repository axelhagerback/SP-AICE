buildAboutUs();

function buildAboutUs() {

    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.className = 'text-center';
    aboutUsTitle.innerHTML = 'About Us';
    aboutUs.appendChild(aboutUsTitle);





    const topDiv = document.createElement('div');
    topDiv.className = 'w-75 mb-5 mx-auto pb-5';
    aboutUs.appendChild(topDiv);

    const person1Div = document.createElement('div');
    person1Div.className = 'w-25 ml-3 border';
    topDiv.appendChild(person1Div);

    const p1Title = document.createElement('h2');
    p1Title.innerHTML = 'Axel';
    p1Title.className = 'p-2';
    person1Div.appendChild(p1Title);

    const p1Text = document.createElement('p');
    p1Text.className = 'p-2';
    p1Text.innerHTML = 'sjdoasj isdoasjd jdisj kjsdk jl ksjdak jsdlj lj skldjaslj aslkd jk jk sjladkasjdasj ldkj ';
    person1Div.appendChild(p1Text);




};