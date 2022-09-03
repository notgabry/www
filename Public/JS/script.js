function getAge() {
    let date = new Date(2007, 10, 12)
    let diffYear = Date.now() - date.getTime()
    let age = new Date(diffYear);
  
    let finalAge =  Math.abs(age.getUTCFullYear() - 1970)

    let span = document.querySelector('#age');
    span.innerHTML = finalAge
}

getAge()
twemoji.parse(document.body)
setInterval(getAge, 5 * 60 * 1000)
easterEgg(twemoji.parse('🇬🇧'), twemoji.parse('🐱'), twemoji.parse('🇮🇹'))
