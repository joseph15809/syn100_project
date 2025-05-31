document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.querySelector('.menu-toggle');
  const nav  = document.querySelector('.navbar-links');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});