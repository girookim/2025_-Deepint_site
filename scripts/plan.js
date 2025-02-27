document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.side-nav .nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);


            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
});
