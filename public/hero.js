console.log('hello from hero');

buildHero();

function buildHero() {
    const heroTitle = document.createElement('h1');
    heroTitle.innerHTML = '<b>SP-AICE</b>';
    hero.appendChild(heroTitle);


    const heroContent = document.createElement('div');
    heroContent.className = 'w-50 d-inline-flex';
    hero.appendChild(heroContent);

    const heroText = document.createElement('p');
    heroText.innerHTML = 'Att erbjuda kompetenta och framtidstänkande programmerare till olika företag för att förverkliga deras ideer'+
    ' samt lösa deras tekniska problem till ett rimligt pris.<br>'+
    '<br>Stor vikt läggs på öppen kommunikation mellan teamet och företaget för att skapa ett så bra samarbete som möjligt.';
    heroText.className = 'w-100';
    heroContent.appendChild(heroText);
};