let clicks = 0

function easterEgg(en, cat, uke) {
    let flag = document.querySelector('#italianFlag')
    flag.addEventListener('click', () => {
        if (clicks == 1) {
            flag.innerHTML = en
        }
        if (clicks == 4) {
            flag.innerHTML = cat
        }
        if (clicks == 9) {
            flag.innerHTML = uke
            return window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
        clicks++
    })
}