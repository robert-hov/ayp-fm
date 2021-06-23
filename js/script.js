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
    const subFooter = document.querySelector('.sub-footer');
    const audio = document.querySelector('.audio');

    window.addEventListener("load", function() {
        let audioHeight = audio.offsetHeight;
        subFooter.style.marginBottom = audioHeight + "px";
    });

    window.onresize = function() {
        let audioHeight = audio.offsetHeight;
        subFooter.style.marginBottom = audioHeight + "px";
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

{
    var songs = ["Hayastan jan.mp3"];

    const playBnt = document.querySelector('.audio__play-btn');
    const muteBtn = document.querySelector('.audio__voice-icon');
    const muteBtnUse = muteBtn.querySelector('use');
    const playBntUse = playBnt.querySelector('use');
    var songTitle = document.querySelector('.audio__cover-song');
    var songSlider = document.querySelector('.audio__progress');
    var currentTime = document.querySelector('.audio__time-current');
    var duration = document.querySelector('.audio__time-total');
    var volumeSlider = document.querySelector('.audio__voice-progress');
    // var nextSongTitle = document.getElementById('nextSongTitle');

    var song = new Audio();
    var currentSong = 0;

    window.onload = loadSong;

    function loadSong () {
        song.src = "music/" + songs[currentSong];
        songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
        song.playbackRate = 1;
        song.volume = volumeSlider.value;
        setTimeout(showDuration, 1000);
    }

    setInterval(updateSongSlider, 1000);

    function updateSongSlider () {
        var c = Math.round(song.currentTime);
        songSlider.value = c;
        currentTime.textContent = convertTime(c);
        if(song.ended){
            next();
        }
    }

    function convertTime (secs) {
        var min = Math.floor(secs/60);
        var sec = secs % 60;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        return (min + ":" + sec);
    }

    function showDuration () {
        var d = Math.floor(song.duration);
        songSlider.setAttribute("max", d);
        duration.textContent = convertTime(d);
    }

    function playOrPauseSong () {
        song.playbackRate = 1;
        if(song.paused){
            song.play();
            playBntUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#pause-btn');
            playBntUse.style.fill = "var(--ayp-gray-2)";
        }else{
            song.pause();
            playBntUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#play-btn');
            playBntUse.style.fill = "var(--ayp-orange)";
        }
    }

    function next(){
        currentSong = currentSong + 1 % songs.length;
        loadSong();
    }

    function previous () {
        currentSong--;
        currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
        loadSong();
    }

    function seekSong () {
        song.currentTime = songSlider.value;
        currentTime.textContent = convertTime(song.currentTime);
    }

    function adjustVolume () {
        song.volume = volumeSlider.value;
        if (song.volume == 0) {
            muteBtnUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#volume-mute');
            muteBtnUse.style.fill = "var(--ayp-gray-2)"
        } else {
            muteBtnUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#volume');
            muteBtnUse.style.fill = "var(--ayp-orange)"
        }
    }

    function muteVolume () {
        if (muteBtn.className == "audio__voice-icon" && song.volume != 0){
            // volumeSlider.value = 0.5;
            song.volume = 0;
            muteBtn.classList.add('active');
            muteBtnUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#volume-mute');
            muteBtnUse.style.fill = "var(--ayp-gray-2)"
        } else if (song.volume >= 0) {
            song.volume = volumeSlider.value;
            muteBtn.classList.remove('active');
            muteBtnUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#volume');
            muteBtnUse.style.fill = "var(--ayp-orange)"
        }
    }
}

(function(){

    // Really basic check for the ios platform
    // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
    // Get the device pixel ratio
    var ratio = window.devicePixelRatio || 1;
  
    // Define the users device screen dimensions
    var screen = {
      width : window.screen.width * ratio,
      height : window.screen.height * ratio
    };
  
    // iPhone X Detection
    const iphoneX = document.querySelector('.nav__inner');

    if (iOS && screen.width == 1125 && screen.height === 2436) {
        iphoneX.classList.add('iphoneX');
    } else {
        iphoneX.classList.remove('iphoneX');
    }

    window.onresize = () => {
        switch ( window.orientation) {

            case 0:
                iphoneX.style.paddingRight = "2rem";
                iphoneX.style.paddingLeft = "2rem";
            break;
        
            case 90:
                iphoneX.style.paddingLeft = "4rem"
            break;
        
            case -90:
                iphoneX.style.paddingRight = "4rem"
            break;
        }
    }     
  })();