// Автоматическое определение активной страницы в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleInfoBtn');
    const extraContent = document.getElementById('extraContent');

    toggleBtn.addEventListener('click', () => {
        extraContent.classList.toggle('show');

        if (extraContent.classList.contains('show')) {
            toggleBtn.textContent = 'Скрыть информацию';
        } else {
            toggleBtn.textContent = 'Показать дополнительную информацию';
        }
    });
    });
