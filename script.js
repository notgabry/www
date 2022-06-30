function getAge() {
    let date = new Date(2007, 10, 12)
    let diffYear = Date.now() - date.getTime()
    let age = new Date(diffYear);
  
    let finalAge =  Math.abs(age.getUTCFullYear() - 1970)

    let span = document.querySelector('span');
    span.innerHTML = finalAge
}

getAge()
setInterval(getAge, 5 * 60 * 1000)
twemoji.parse(document.body)
