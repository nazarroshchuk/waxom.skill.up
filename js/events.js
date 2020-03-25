var menuFixed = document.querySelector('.header-up-active');
document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 50) {
        menuFixed.classList.add('active');
    } else {
        menuFixed.classList.remove('active');
    }
});



