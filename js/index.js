const body = document.querySelector('body');
const dark_mode = document.querySelector('.dark-mode-toggler');
const moon = document.querySelector('.bi-moon');
const sun = document.querySelector('.bi-sun');





console.log(dark_mode);


dark_mode.addEventListener('click', () => {
    body.classList.toggle('dark');
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
})