document.addEventListener('DOMContentLoaded', () => {
    const semester1Tab = document.getElementById('semester1');
    const semester2Tab = document.getElementById('semester2');
    const semester1Content = document.getElementById('semester1-content');
    const semester2Content = document.getElementById('semester2-content');
    const semester1Team = document.querySelector('.semester1-team');
    const semester2Team = document.querySelector('.semester2-team');

    
    semester1Tab.classList.add('active');
    semester2Tab.classList.remove('active');
    semester1Content.classList.add('active');
    semester2Content.classList.remove('active');
    semester1Team.style.display = 'block'; 
    semester2Team.style.display = 'none'; 

    
    semester1Tab.addEventListener('click', () => {
        semester1Tab.classList.add('active');
        semester2Tab.classList.remove('active');

        semester1Content.classList.add('active');
        semester2Content.classList.remove('active');

        semester1Team.style.display = 'block'; 
        semester2Team.style.display = 'none'; 
    });

    
    semester2Tab.addEventListener('click', () => {
        semester2Tab.classList.add('active');
        semester1Tab.classList.remove('active');

        semester2Content.classList.add('active');
        semester1Content.classList.remove('active');

        semester2Team.style.display = 'block'; 
        semester1Team.style.display = 'none';  
    });
});
