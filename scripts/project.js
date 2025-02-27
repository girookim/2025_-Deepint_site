document.addEventListener('DOMContentLoaded', () => {
    const type1Tab = document.getElementById('type1');
    const type2Tab = document.getElementById('type2');
    const groupStudySelector = document.getElementById('group-study-selector');
    const aiProjectSelector = document.getElementById('ai-project-selector');
    const groupStudyContent = document.getElementById('group-study-content');
    const aiProjectContent = document.getElementById('ai-project-content');
    const group1Tab = document.getElementById('group-semester1');
    const group2Tab = document.getElementById('group-semester2');
    const project1Tab = document.getElementById('project-semester1');
    const project2Tab = document.getElementById('project-semester2');
    const project3Tab = document.getElementById('project-semester3');
    const group1content = document.getElementById('group-semester1-content');
    const group2content = document.getElementById('group-semester2-content');
    const project1content = document.getElementById('project-semester1-content');
    const project2content = document.getElementById('project-semester2-content');
    const project3content = document.getElementById('project-semester3-content');
    
    type1Tab.classList.add('active');
    groupStudySelector.style.display = 'block';
    groupStudyContent.style.display = 'block';
    aiProjectSelector.style.display = 'none';
    project1content.style.display = 'none';
    project2content.style.display = 'none';
    project3content.style.display = 'none';

    type1Tab.addEventListener('click', () => {
        type1Tab.classList.add('active');
        type2Tab.classList.remove('active');

        groupStudySelector.style.display = 'block';
        groupStudyContent.style.display = 'block';
        aiProjectSelector.style.display = 'none';
        aiProjectContent.style.display = 'none';

        group1Tab.classList.add('active');
        group2Tab.classList.remove('active');

        group1content.style.display = 'block';
        group2content.style.display = 'none';
        project1content.style.display = 'none';
        project2content.style.display = 'none';
        project3content.style.display = 'none';
    });


    type2Tab.addEventListener('click', () => {
        type2Tab.classList.add('active');
        type1Tab.classList.remove('active');

        groupStudySelector.style.display = 'none';
        groupStudyContent.style.display = 'none';
        aiProjectSelector.style.display = 'block';
        aiProjectContent.style.display = 'block';

        
        project1Tab.classList.add('active');
        project2Tab.classList.remove('active');
        project3Tab.classList.remove('active');

        project1content.style.display = 'block';
        project2content.style.display = 'none';
        project3content.style.display = 'none';
    });

    group1Tab.addEventListener('click', () => {
        group1Tab.classList.add('active');
        group2Tab.classList.remove('active');

        group1content.style.display = 'block';
        group2content.style.display = 'none';
        project1content.style.display = 'none';
        project2content.style.display = 'none';
        project3content.style.display = 'none';
    });

    group2Tab.addEventListener('click', () => {
        group1Tab.classList.remove('active');
        group2Tab.classList.add('active');

        group1content.style.display = 'none';
        group2content.style.display = 'block';
        project1content.style.display = 'none';
        project2content.style.display = 'none';
        project3content.style.display = 'none';
    });

    project1Tab.addEventListener('click', () => {
        project1Tab.classList.add('active');
        project2Tab.classList.remove('active');
        project3Tab.classList.remove('active');

        group1content.style.display = 'none';
        group2content.style.display = 'none';
        project1content.style.display = 'block';
        project2content.style.display = 'none';
        project3content.style.display = 'none';
    });

    project2Tab.addEventListener('click', () => {
        project1Tab.classList.remove('active');
        project2Tab.classList.add('active');
        project3Tab.classList.remove('active');

        group1content.style.display = 'none';
        group2content.style.display = 'none';
        project1content.style.display = 'none';
        project2content.style.display = 'block';
        project3content.style.display = 'none';
    });

    project3Tab.addEventListener('click', () => {
        project1Tab.classList.remove('active');
        project2Tab.classList.remove('active');
        project3Tab.classList.add('active');

        group1content.style.display = 'none';
        group2content.style.display = 'none';
        project1content.style.display = 'none';
        project2content.style.display = 'none';
        project3content.style.display = 'block';
    });

});
