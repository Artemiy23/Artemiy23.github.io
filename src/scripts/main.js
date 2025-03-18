const burgerMenu = document.querySelector('#burger-menu');
const burgerBtn = document.querySelector('#burger-menu-btn');
const header = document.querySelector('.header');
const body = document.querySelector('body');
let lastScroll = 0;
let delta = 0;

burgerBtn.onclick = function () {
    burgerBtn.classList.toggle('active');
    document.querySelector('body').classList.toggle('scroll-block');
    document.querySelector('html').classList.toggle('scroll-block');
    if (burgerMenu.classList.toggle('open')) {
        burgerMenu.classList.remove('close');
        burgerMenu.removeAttribute('hidden');
    } else {
        burgerMenu.classList.add('close');
    }
}

burgerMenu.addEventListener('animationend', function (e) {
    if (e.animationName == 'menu-close') {
        e.target.hidden = true;
    }
})

window.addEventListener('scroll', function (e) {
    const currentScroll = this.window.scrollY;
    
    console.log(delta);
    console.log(currentScroll + ' current');
    console.log(lastScroll + ' last');
    if (currentScroll <= 100) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
        // return;
    } else if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.add('scroll-up');
        body.classList.remove('scroll-down');
    }
    lastScroll = currentScroll;
})