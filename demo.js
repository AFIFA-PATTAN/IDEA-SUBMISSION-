// ===== Scroll Reveal =====
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150; // adjust when element starts revealing

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('visible');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Future Scope Bullet Animation =====
function animateFutureBullets() {
  const bullets = document.querySelectorAll('.future-points li');
  const section = document.querySelector('#future');
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const windowBottom = window.scrollY + window.innerHeight;

  if (windowBottom > sectionTop + 100) { // trigger a little early
    bullets.forEach((li, index) => {
      li.style.opacity = '0';
      li.style.transform = 'translateY(20px)';
      setTimeout(() => {
        li.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        li.style.opacity = '1';
        li.style.transform = 'translateY(0)';
      }, index * 150); // stagger each bullet
    });
  }
}

window.addEventListener('scroll', animateFutureBullets);
window.addEventListener('load', animateFutureBullets);

// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Optional: Bounce arrow click =====
const arrow = document.querySelector('.bounce-arrow span');
if (arrow) {
  arrow.addEventListener('click', () => {
    const nextSection = document.querySelector('#problem');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
}