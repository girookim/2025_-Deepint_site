document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }

    // document.addEventListener("DOMContentLoaded", function () {
    //     function updateHeight() {
    //         document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    //     }
    
    //     updateHeight();
    //     window.addEventListener('resize', updateHeight); 
    // });


    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const navFloatingLinks = document.querySelectorAll('.nav-floating a');
    const homeContent = document.querySelector('.home-content');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    const h1Element = document.querySelector("#ai h1");
    const homeSection = document.getElementById('home');
    const navFloating = document.querySelector('.nav-floating');
    const navItems = document.querySelectorAll('.side-nav .nav-item');
    const planSection = document.querySelector("#plan");
    const timeline = document.querySelector(".timeline");
    const milestones = document.querySelectorAll(".milestone");
    


   
    let isTimelineExpanded = false;
    let isBoxExpanded = 0;
    let hideTimeout;
    let isScrollLocked = false;




    const expandTimeline = () => {
       
        timeline.style.width = "100%";
    
        
        milestones.forEach((milestone, index) => {
            setTimeout(() => {
                
                milestone.style.color = "white";
    
                
                const monthName = milestone.querySelector(".month-name");
                if (monthName) {
                    monthName.style.opacity = "1"; 
                    monthName.style.transform = "translateY(-10px)";  
                }
    
                
                const events = milestone.querySelectorAll(".event");
                events.forEach((event, idx) => {
                    setTimeout(() => {
                        event.style.opacity = "1";
                        event.style.transform = "translateY(-10px)"; 
                    }, idx * 200);
                });
            }, 500 + index * 200); 
        });
    };

    
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && !isTimelineExpanded) {
                
                if (!isScrollLocked) {
                    document.body.style.overflowY = "hidden";
                    isScrollLocked = true;
                }

                
                isTimelineExpanded = true;
                expandTimeline();

                
                setTimeout(() => {
                    document.body.style.overflowY = "auto";
                }, 2000); 
            }
        },
        { threshold: 0.9 } 
    );

    
    observer.observe(planSection);
    




    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'center' 
            });
        });
    });




































    // 절대 이 다음부터 코드를 건들지 마
    













    navFloating.classList.add('shrink'); 

    setTimeout(() => {
        homeContent.classList.add('fade-in');
    }, 300);

    
    


    function toggleNavVisibility() {
        const isMobileView = window.innerWidth <= 768;
        if (isMobileView) {
            nav.style.position = 'fixed';
            nav.style.top = '0';
            nav.style.width = '100%';
            navFloating.style.display = 'none';
        } else {
            nav.style.position = 'static';
            navFloating.style.display = 'flex';
        }
    }
    

    

   
    toggleNavVisibility();

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach((navLink) => navLink.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const h1Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1Element.classList.add("visible");
            } else {
                h1Element.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1
    });
    h1Observer.observe(h1Element);
    
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);

    if (!isMobile) {
        const floatingNavObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    nav.style.opacity = '0';
                    nav.style.pointerEvents = 'none';
                    navFloating.classList.add('visible');
                    navFloating.style.pointerEvents = 'auto';
                    logo.style.display = 'none';
                    isHomeVisible = false;
                } else {
                    nav.style.opacity = '1';
                    nav.style.pointerEvents = 'auto';
                    navFloating.classList.remove('visible');
                    navFloating.style.pointerEvents = 'none';
                    logo.style.display = 'block';
                    isHomeVisible = true;
                }
            });
        }, {
            threshold: 0.1
        });
        floatingNavObserver.observe(homeSection);
    }
    


    const slider = document.createElement('div');
    slider.classList.add('slider');
    navFloating.appendChild(slider);

    function updateSlider(activeLink) {
        const rect = activeLink.getBoundingClientRect();
        const navRect = navFloating.getBoundingClientRect();
        slider.style.display = 'block';
        slider.style.width = `${rect.width + 20}px`;
        slider.style.left = `${rect.left - navRect.left - 10}px`;
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        if (isBoxExpanded === 0) return;

        entries.forEach(entry => {
            const targetId = entry.target.id;
            const targetLink = document.querySelector(`.nav-floating a[href="#${targetId}"]`);

            if (entry.isIntersecting) {
                navFloatingLinks.forEach((link) => link.classList.remove('active'));
                if (targetLink) {
                    targetLink.classList.add('active');
                    updateSlider(targetLink);
                }
            } else {
                if (targetLink) {
                    targetLink.classList.remove('active');
                }
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    navFloatingLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    navFloating.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        navFloating.classList.remove('shrink');
        isBoxExpanded = 1;

        navFloatingLinks.forEach(link => {
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
            link.style.pointerEvents = 'auto';
        });

        const activeLink = navFloating.querySelector('.active');
        if (activeLink) {
            updateSlider(activeLink);
        }
    });

    navFloating.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout);
        navFloating.classList.remove('shrink');
        isBoxExpanded = 1;

        navFloatingLinks.forEach(link => {
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
            link.style.pointerEvents = 'auto';
        });

        const activeLink = navFloating.querySelector('.active');
        if (activeLink) {
            updateSlider(activeLink);
        }
    });

    navFloating.addEventListener('mouseout', () => {
        clearTimeout(hideTimeout);

        hideTimeout = setTimeout(() => {
            if (isBoxExpanded === 1) {
                navFloating.classList.add('shrink');
                isBoxExpanded = 0;

                navFloatingLinks.forEach((link, index) => {
                    link.style.transition = `opacity 0.3s ease, transform 0.3s ease ${index * 0.1}s`;
                    link.style.opacity = '0';
                    link.style.transform = 'translateX(20px)';
                    link.style.pointerEvents = 'none';
                });

                slider.style.display = 'none';
            }
        });
    });


    
});
