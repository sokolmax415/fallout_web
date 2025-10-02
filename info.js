document.addEventListener('DOMContentLoaded', function() {

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

    //Смена картинки
    const img = document.getElementById("poster");

    img.addEventListener("mouseover", () => {
        img.style.opacity = "0"; // делаем прозрачным
        setTimeout(() => {
          img.src = "images/poster2.png";
          img.style.opacity = "1"; // плавно возвращаем
        }, 300);
      });

      img.addEventListener("mouseout", () => {
        img.style.opacity = "0";
        setTimeout(() => {
          img.src = "images/poster1.png";
          img.style.opacity = "1";
        }, 300);
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