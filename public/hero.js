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
    heroText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae metus a erat iaculis cursus ac semper leo.' +
    'Aliquam sed consequat quam. Proin lobortis hendrerit dolor, vitae egestas sem imperdiet eget.' + 
    'Nam id arcu id tortor rhoncus euismod quis eu quam. Vivamus sem dui, condimentum sed commodo.';
    heroText.className = 'w-100';
    heroContent.appendChild(heroText);
};