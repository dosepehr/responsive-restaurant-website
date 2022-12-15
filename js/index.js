const body = document.querySelector('body');
const dark_mode = document.querySelector('.dark-mode-toggler');
const moon = document.querySelector('.bi-moon');
const sun = document.querySelector('.bi-sun');

dark_mode.addEventListener('click', () => {
    body.classList.toggle('dark');
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
})



const header = document.querySelector('header');



window.addEventListener('scroll', () => {
    header.classList.toggle('header-down', window.scrollY >= 100);
})


window.addEventListener('scroll', () => {
    header.classList.toggle('header-up', window.scrollY < 100);
})