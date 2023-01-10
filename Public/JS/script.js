let isPlaying = false
let clicks = 0
let firstRow = []
let secondRow = []
twemoji.parse(document.body)

const rick = (en, cat, stop) => {
    let rick = new Audio('/Public/Assets/Sounds/rick.mp3')
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

const calculateSnowFalling = () => {
    let num = Math.random() * (10 - 4) + 4
    let secondDigit = num.toString().split('.')[1].split('')[0]
    if (parseInt(secondDigit) >= 6) secondDigit = 5
    let first = `${num.toFixed(0)}.${secondDigit}`
    if (firstRow.includes(first)) return calculateSnowFalling()
    else firstRow.push(first)

    let num_ = Math.random() * (16 - 5) + 5
    let secondDigit_ = num_.toString().split('.')[1].split('')[0]
    if (parseInt(secondDigit_) >= 6) secondDigit_ = 5
    let second = `${num_.toFixed(0)}.${secondDigit_}` 
    if (secondRow.includes(second)) return calculateSnowFalling()
    else secondRow.push(second)

    let opacity = Math.random() * (80 - 40) + 40
    let size = Math.random() * (1.5 - 1) + 1
    return { vertical: second, horizontal: first, size: size, opacity: opacity } 
}

const loadSnow = () => {
    let s = document.getElementById('snowflakes')
    for (let i = 0; i < 20; i++) {
        let snow = calculateSnowFalling()
        let a = document.createElement('div')
        a.className = 'snowflake'
        let b = document.createElement('div')
        b.className = 'fallingSnow'
        b.style = `--o: ${snow.opacity}%; --w: ${snow.size}vh`
        a.appendChild(b)
        a.style = `--d: ${snow.vertical}s, ${snow.horizontal}s;`
        s.appendChild(a)
    }
} 

const age = () => {
    let date = new Date(2007, 9, 12)
    let diffYear = Date.now() - date.getTime()
    let age = new Date(diffYear);
  
    let finalAge =  Math.abs(age.getUTCFullYear() - 1970)

    let span = document.querySelector('#age')
    span.innerHTML = finalAge
}

age()
loadSnow()
rick(twemoji.parse('🇬🇧'), twemoji.parse('🐱'), twemoji.parse('🛑'))
setInterval(age, 5 * 60 * 1000)
