const contactForm = document.querySelector('.contactForm');
const emailInput = document.querySelector('#emailAdress');
const isValid = (emailInput) => !/([A-Z])/g.test(emailInput);
const error = document.querySelector('.error');

contactForm.addEventListener('submit', (event) => {
  if (!isValid(emailInput.value)) {
    event.preventDefault();
    error.textContent = 'Submission failed, pleae use lowercase for your email';
    error.className = 'message active';
  } else {
    contactForm.submit();
    emailInput.className = 'error valid';
    error.textContent = '';
    error.className = 'error';
  }
});
