document.addEventListener('DOMContentLoaded', () => {

    // Simple Menu Toggle for mobile screens
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu ul');

    menuToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = '#fff';
            navMenu.style.padding = '20px 0';
            navMenu.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
            navMenu.style.zIndex = '999';

            const links = navMenu.querySelectorAll('li');
            links.forEach(link => {
                link.style.textAlign = 'center';
                link.style.marginBottom = '15px';
            });
        }
    });

    // Reset menu style on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.position = 'static';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';

            const links = navMenu.querySelectorAll('li');
            links.forEach(link => {
                link.style.textAlign = 'left';
                link.style.marginBottom = '0';
            });
        } else {
            navMenu.style.display = 'none';
        }
    });
});
