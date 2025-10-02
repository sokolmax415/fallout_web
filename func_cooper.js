document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("cooper-img");

  img.addEventListener("mouseover", () => {
    img.style.opacity = "0"; // делаем прозрачным
    setTimeout(() => {
      img.src = "images/говард.png";
      img.style.opacity = "1"; // плавно возвращаем
    }, 300);
  });

  img.addEventListener("mouseout", () => {
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = "images/гуль.png";
      img.style.opacity = "1";
    }, 300);
  });

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
});