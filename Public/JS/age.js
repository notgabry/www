const age = () => {
    let date = new Date(2007, 9, 12)
    let diffYear = Date.now() - date.getTime()
    let age = new Date(diffYear);
  
    let finalAge =  Math.abs(age.getUTCFullYear() - 1970)

    let span = document.querySelector('#age');
    span.innerHTML = finalAge
}

age()

setInterval(age, 5 * 60 * 1000)
