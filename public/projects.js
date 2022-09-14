buildProjects()

function buildProjects() {
const Title = document.createElement('h1');
Title.className = 'text-center';
Title.innerHTML = 'Projects';
projects.appendChild(Title);

const BorderDiv = document.createElement('div');
BorderDiv.setAttribute('id', 'BorderDiv');
BorderDiv.className = 'mx-auto rounded card-body bg-primary outline-primary w-50';
projects.appendChild(BorderDiv);

const ContentImage = document.createElement('img');
ContentImage.setAttribute('src', 'project-design-in-project-management.png');
ContentImage.className = 'card-img-top rounded';
BorderDiv.appendChild(ContentImage);

const ContentText = document.createElement('p');
ContentText.className = 'text-center w-75 ml-5 card-text';
ContentText.innerHTML = 'bhehfsdfjeiojfiwejsjrfisdfjiowehf ijiedfklgjrejigjdfjgkjerjgiodf wdasdwerkgjdfjgioqweuifhsdfughidjuij rjreuithdfhgjdfgd jkhjdgkldfigjkl igjfgjhjsdjiowufis';
BorderDiv.appendChild(ContentText); 


};