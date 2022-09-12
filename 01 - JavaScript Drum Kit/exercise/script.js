
keys = document.querySelectorAll('.key');
sounds = document.querySelectorAll('audio');

window.addEventListener('keydown', e => {
    keyCode = e.keyCode
    keys.forEach(element => {
        const elementCode = element.attributes.item('data-code').value;
        if (keyCode == elementCode) {
            const sound = document.querySelector(`audio[data-code="${elementCode}"]`)              
            console.log(sound)
            sound.play()
            element.classList.add("playing");
        };
    });
    
    
});

keys.forEach(element => {
    element.addEventListener('transitionend', e => {
        element.classList.remove("playing");
    });
});