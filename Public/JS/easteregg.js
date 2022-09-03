let clicks = 0

function easterEgg(en, cat, it) {
    let audio = new Audio('/Public/Assets/rick.mp3')
    let flag = document.querySelector('#italianFlag')
    flag.addEventListener('click', () => {
        console.log(audio.played)
        if (clicks == 0) flag.innerHTML = en
        if (clicks == 1) flag.innerHTML = cat
        if (clicks == 2) {
            flag.innerHTML = it
            audio.play()
            clicks = -1
        }
        clicks++
    })
}
