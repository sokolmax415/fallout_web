document.addEventListener('DOMContentLoaded', function() {
    // Элементы для работы с навыками
    const showSkillsBtn = document.getElementById('showSkills');
    const skillsInfo = document.getElementById('skillsInfo');
    
    // Кнопка показа/скрытия навыков
    if (showSkillsBtn && skillsInfo) {
        showSkillsBtn.addEventListener('click', function() {
            if (skillsInfo.classList.contains('active')) {
                skillsInfo.classList.remove('active');
                showSkillsBtn.textContent = 'Показать навыки';
                // Сбрасываем прогресс-бары при скрытии
                resetSkillBars();
            } else {
                skillsInfo.classList.add('active');
                showSkillsBtn.textContent = 'Скрыть навыки';
                // Запускаем анимацию прогресс-баров
                setTimeout(animateSkillBars, 100);
            }
        });
    }
    
    // Анимация прогресс-баров навыков
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 200);
        });
    }
    
    // Сброс прогресс-баров
    function resetSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.width = '0';
        });
    }
    
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
    
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за секциями
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 1.0s ease, transform 0.6s ease';
        observer.observe(section);
    });
});