let firstRow = []
let secondRow = []

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
    console.log(firstRow, secondRow)
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

loadSnow()