let clicks = 0

const rick = (en, cat, stop) => {
    let rick = new Audio('/Public/Assets/rick.mp3')
    let flag = document.querySelector('#italianFlag')
    flag.addEventListener('click', () => {
        if (clicks == 0) flag.innerHTML = en
        if (clicks == 1) flag.innerHTML = cat
        if (clicks == 2) {
            flag.innerHTML = stop
            if (isPlaying) return
            isPlaying = true
            rick.play()
        }
        clicks++
    })
    rick.addEventListener('ended', () => isPlaying = false)
}

rick(twemoji.parse('🇬🇧'), twemoji.parse('🐱'), twemoji.parse('🛑'))