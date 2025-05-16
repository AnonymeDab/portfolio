// Code client (front-end)

const section = document.querySelectorAll('section');
const navigation = document.querySelectorAll('.navigation a');
const header = document.querySelector('header');
const btnhome = document.querySelector('.btn-home');
const menu_b = document.querySelector('#menu_b');
const nav = document.querySelector('.navigation');

const burgerActive = () => {
  menu_b.classList.toggle('bx-x');
  menu_b.classList.toggle('active');
  nav.classList.toggle('active');

  if (menu_b.classList.contains('active')) {
    nav.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    nav.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

const scollActive = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navigation.forEach(link => {
        link.classList.remove('active');
        const activeLink = document.querySelector(`.navigation a[href*="${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      });
    }
  });
};

const scrollReveal = ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

scrollReveal.reveal('.home_content,.title', { origin: 'top' });
scrollReveal.reveal('.home_img img, .services_content, .portfolio_box, .contact form', { origin: 'bottom' });
scrollReveal.reveal('.home_content h1,.about_img img', { origin: 'left' });
scrollReveal.reveal('.home_content p, .about_content', { origin: 'right' });
scrollReveal.reveal('.service_box', { origin: 'top' });
scrollReveal.reveal('.skill_box', { origin: 'top' });

menu_b.addEventListener('click', burgerActive);
window.addEventListener('scroll', scollActive);

const typed = new Typed('.multiple', {
  strings: ["Développeur Web", "Designer", "Créateur"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});

document.getElementById('btn')?.addEventListener('click', function () {
  // Action ici
});
