const projectLis = document.querySelectorAll('.projects-li');
const containerTransforms = document.querySelectorAll('.container-transform');
const projects = document.querySelectorAll('.projects');

projectLis.forEach((projectLi, index) => {
    projectLi.addEventListener('click', () => {
        const correspondingContainerTransform = containerTransforms[index];
        const correspondingProject = projects[index];

        correspondingContainerTransform.classList.add('specialContainer');
        correspondingProject.classList.add('special');

        setTimeout(function() {        
            window.location.href = 'https://healthclinic.vercel.app';
        }, 2000);
    });
});
