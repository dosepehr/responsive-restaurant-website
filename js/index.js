/** selectors */
const body = document.querySelector('body');
const dark_mode = document.querySelector('.dark-mode-toggler');
const moon = document.querySelector('.bi-moon');
const sun = document.querySelector('.bi-sun');

const header = document.querySelector('header');
const open_sidebar = document.querySelector('.bi-list');
const sidebar = document.querySelector('.side-bar');
const close_sidebar = document.querySelector('.bi-x');
const overlay = document.querySelector('.overlay');






dark_mode.addEventListener('click', () => {
    body.classList.toggle('dark');
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
})






window.addEventListener('scroll', () => {
    header.classList.toggle('header-down', window.scrollY >= 100);
})


window.addEventListener('scroll', () => {
    header.classList.toggle('header-up', window.scrollY < 100);
})




open_sidebar.addEventListener('click', () => {
    toggle_sidebar();
})
close_sidebar.addEventListener('click', () => {
    toggle_sidebar();

})
overlay.addEventListener('click', () => {
    toggle_sidebar();
})






const toggle_sidebar = () => {
    sidebar.classList.toggle('side-bar-active');
    overlay.classList.toggle('overlay-active');
}
















const sections = document.querySelectorAll('section');
const li = document.querySelectorAll('.nav-ul li');
let current;


window.addEventListener('scroll', function () {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // console.log(sectionTop, sectionHeight)
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id')
        }
    })
    li.forEach(item => {
        item.classList.remove("active")
        if (item.classList.contains(current)) {
            item.classList.add("active")
        }
    })
})