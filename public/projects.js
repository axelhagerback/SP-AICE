console.log('hello from projects');

buildProjects()

function buildProjects() {
const Title = document.createElement('h1');
Title.className = 'text-center';
Title.innerHTML = 'Projects';
projects.appendChild(Title);

const BorderDiv = document.createElement('div');
BorderDiv.setAttribute('id', 'BorderDiv');
BorderDiv.className = 'mx-auto card-body overflow-auto bg-primary w-50';
projects.appendChild(BorderDiv);

const ContentImage = document.createElement('img');
ContentImage.setAttribute('src', 'project-design-in-project-management.png');
ContentImage.className = 'card-img-top';
BorderDiv.appendChild(ContentImage);

const ContentText = document.createElement('p');
ContentText.className = 'text-center';
ContentText.innerHTML = 'bhehfsdfjeiojfiwejsjrfisdfjiowehf ijiedfklgjrejigjdfjgkjerjgiodf wdasdwerkgjdfjgioqweuifhsdfughidjuij rj';
BorderDiv.appendChild(ContentText); 


};