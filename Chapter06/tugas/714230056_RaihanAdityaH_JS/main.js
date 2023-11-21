let search = Document.querySelector('.search-box');

Document.querySelector('#search-icon').oneclick = () => {
    search.classList.toggle('.active');
    navbar.classList.remove('.active');
}

window.onscroll = () => {
    navbar.classList.remove('.active');
    search.classList.remove('.active');
}

let navbar = Document.querySelector('.navbar');

Document.querySelector('#menu-icon').oneclick = () => {
    navbar.classList.toggle('.active');
    search.classList.remove('.active');
}


Window.onscroll = () => {
    navbar.classList.remove('.active');
    search.classList.remove('.active');
}

let header = document.querySelector('header');

document.querySelector('#menu-icon')
navbar.classList.toggle('.active');
search.classList.remove('.active');

window.addEventListener('scroll' ,() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});