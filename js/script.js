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

btn.addEventListener('click', function () {
    body.classList.toggle('active-menu')
    nav.classList.toggle('active')
});

//audio

{
    const playBnt = document.querySelector('.audio__play-btn');
    const audio = document.querySelector('.audio__audio');
    const audioTime = document.querySelector('.audio__time-left');

    if (playBnt && audio) {
        playBnt.addEventListener('click', function () {
            const playBtnSvg = playBnt.querySelector('use');
            if (audio.paused) {
                audio.play();
                playBtnSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#pause-btn');
                playBtnSvg.style.fill="var(--ayp-gray-2)";
            } else {
                audio.pause();
                playBtnSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#play-btn')
                playBtnSvg.style.fill="var(--ayp-orange)";
            }
        })
    }
}
