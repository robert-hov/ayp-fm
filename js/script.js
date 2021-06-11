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

//sub footer 

{
    const body = document.querySelector('body')
    const subFooter = document.querySelector('.sub-footer');
    const audio = document.querySelector('.audio');

    body.onload = function() {
        let audioHeight = audio.offsetHeight;
        subFooter.style.marginBottom = audioHeight + "px";
    }

    body.onresize = function() {
        let audioHeight = audio.offsetHeight;
        subFooter.style.marginBottom = audioHeight + "px";
    }
}

//audio

{
    const playBnt = document.querySelector('.audio__play-btn');
    const audio = document.querySelector('.audio__audio');
    const audioTime = document.querySelector('.audio__time-left');
    const audioVoice = document.querySelector('.audio__voice-icon');


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

    if (audio && audioVoice) {
        const audioVoiceSvg = audioVoice.querySelector('use');
        audioVoice.addEventListener('click', function(){
            if(audio.muted == false) {
                audio.muted = true;
                audioVoiceSvg.style.fill="var(--ayp-gray-2)";
                audioVoiceSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#volume-mute')
            } else {
                audio.muted = false;
                audioVoiceSvg.style.fill="var(--ayp-orange)";
                audioVoiceSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#volume')
            }
        })
    }
}

//programms

{
    const plusBtn = document.querySelectorAll('.prog__check-container');

    if(plusBtn) {
        
        plusBtn.forEach(function(item) {
            item.addEventListener('click', function() {
                item.closest('.prog__row').classList.toggle('active');
                if (item.closest('.prog__row').className == 'prog__row prog__row_def active') {
                    item.querySelector('use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#minus');
                    item.querySelector('use').style.fill = 'var(--ayp-white)';
                    item.style.transform = 'rotate(180deg)';
                } else {
                    item.querySelector('use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#plus');
                    item.querySelector('use').style.fill = 'var(--ayp-orange)';
                    item.style.transform = 'rotate(360deg)';
                }
            }) 
            
        })
        
        // if(item.closest('.prog__row').className = 'prog__row')
        // console.log(plusBtn)
    }
}