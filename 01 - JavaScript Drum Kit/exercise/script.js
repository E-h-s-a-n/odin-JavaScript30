
window.addEventListener('keydown', e => {
    keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-code="${keyCode}"]`);
    const key = document.querySelector(`.key[data-code="${keyCode}"]`);
    if (!audio || !key) return // Get outta here NOW!
    audio.fastSeek(0);
    audio.play(0);
    key.classList.add('playing');    
});

keys = document.querySelectorAll('.key');
keys.forEach(element => {
    element.addEventListener('transitionend', e => {
        element.classList.remove("playing");
    });
});