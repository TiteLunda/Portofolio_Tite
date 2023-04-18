const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const toggleActiveClass = (element) => {
  element.classList.toggle('active');
};
const removeActiveClass = (element) => {
  element.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  toggleActiveClass(hamburger);
  toggleActiveClass(mobileMenu);
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    removeActiveClass(hamburger);
    removeActiveClass(mobileMenu);
  });
});