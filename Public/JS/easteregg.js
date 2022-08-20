let clicks = 0

function easterEgg(en, cat, uke) {
    let flag = document.querySelector('#italianFlag')
    flag.addEventListener('click', () => {
        if (clicks == 0) {
            flag.innerHTML = en
        }
        if (clicks == 3) {
            flag.innerHTML = cat
        }
        if (clicks == 5) {
            flag.innerHTML = uke
            let audio = new Audio('../assets/rick.mp3')
            audio.play()
            clicks = 0
        }
        clicks++
    })
}
