document.addEventListener('scroll', () => {
    const {pageYOffset} = window, header = document.querySelector('body main header');

    header.classList.toggle('sticky', pageYOffset > 0);
});