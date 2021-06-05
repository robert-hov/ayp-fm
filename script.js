// const body = document.querySelector('.ayp-body');
// const nav = document.querySelector('.ayp-nav__container-inner');
// const btn = document.querySelector('.ayp-nav__burger-btn-container');

// btn.addEventListener('click', function(){
//     //nav.classList.toggle('active');
//     console.log(nav)
//     // body.classList.toggle('nav__active');
// });

const body = document.querySelector('.body');
const nav = document.querySelector('.nav__container-inner');
const btn = document.querySelector('.nav__btn-label');

btn.addEventListener('click', function(){
    body.classList.toggle('active-menu')
    nav.classList.toggle('active')
});