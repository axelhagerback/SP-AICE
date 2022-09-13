console.log('hello from projects');

buildProjects()

function buildProjects() {
const Title = document.createElement('p');
Title.className = 'text-center font-monospace fs-4';
Title.innerHTML = 'Projects';
projects.appendChild(Title);

const BorderDiv = document.createElement('div');
BorderDiv.className = 'container-sm bg-primary';
projects.appendChild(BorderDiv);

//const Border = document.createElement();
};