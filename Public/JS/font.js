const font = () => {
    let fonts = ['\'Poppins\', sans-serif', '\'Oswald\', sans-serif', '\'Secular One\', sans-serif', '\'Source Code Pro\', monospace', '\'Galindo\', cursive']
    document.querySelector('#boxText div').style.fontFamily = fonts[fontIndex]
    if (fontIndex <= 3) fontIndex++
    else fontIndex = 0
}

setInterval(font, 2000)

