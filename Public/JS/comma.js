(() => {
    let nyan = new Audio('/Public/Assets/nyan.mp3')
    let d = document.getElementById('comma')
    d.addEventListener('click', () => {
        d.style.color = '#5468FF'
        
        setTimeout(() => {
            d.style.color = '#fff'
        }, 1000)

        if (isPlaying) return
        isPlaying = true
        nyan.play()
    })

    nyan.addEventListener('ended', () => isPlaying = false)
})()