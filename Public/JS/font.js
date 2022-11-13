const font = () => {
    let fonts = ['\'Poppins\', sans-serif', '\'Oswald\', sans-serif', '\'Secular One\', sans-serif', '\'Source Code Pro\', monospace', '\'Galindo\', cursive', '\'Rubik Bubbles\', cursive']
    document.querySelector('#boxText div').style.fontFamily = fonts[fontIndex]
    if (fontIndex <= (fonts.length - 2)) fontIndex++
    else fontIndex = 0
}


setInterval(font, 1200)