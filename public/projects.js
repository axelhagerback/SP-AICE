console.log('hello from projects');

buildProjects()

function buildProjects() {
const Title = document.createElement('p');
Title.className = 'text-center font-monospace fs-4';
Title.innerHTML = 'Projects';
projects.appendChild(Title);

const BorderDiv = document.createElement('div');
BorderDiv.setAttribute('id', 'BorderDiv');
BorderDiv.className = 'mx-auto card-text overflow-auto bg-primary w-50';
projects.appendChild(BorderDiv);

const Content = document.createElement('p');
Content.className = 'text-center';
Content.innerHTML = 'bhehfsdfjeiojfiwejsjrfisdfjiowehf ijiedfklgjrejigjdfjgkjerjgiodf wdasdwerkgjdfjgioqweuifhsdfughidjuij rj';
BorderDiv.appendChild(Content); 
};