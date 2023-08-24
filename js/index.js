const bg = document.querySelector('.text-container');
const btnMenu = document.getElementById('btn-menu');

// menu
btnMenu.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    btnMenu.setAttribute('aria-expanded', active);
    active ? btnMenu.setAttribute('aria-label', 'Fechar menu') : btnMenu.setAttribute('aria-label', 'Abrir menu');
})

// clipPath effect
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bg.style.clipPath = "circle(" + (value - 400) + "px at center)";
})