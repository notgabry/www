const frame = () => {
  confetti({
    particleCount: 250,
    startVelocity: 80,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 1 }
  })
  
  confetti({
    particleCount: 250,
    startVelocity: 80,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 1 }
  })
}
  

(async () => {
  let birthday = new Audio('/Public/Assets/Sounds/birthday.mp3') 
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  if (month == 10 && day == 12) {
    let canvasConfetti = document.createElement('canvas')
    document.body.appendChild(canvasConfetti)
  
    confetti.create(canvasConfetti, {
      resize: true,
      useWorker: true
    })

    setInterval(async () => {
      requestAnimationFrame(frame)
      let h = document.getElementById('parId')
      h.innerHTML = `${twemoji.parse('🎂')} <strong>Today</strong> is my <strong>Birthday</strong> so Happy Birthday to me`

      if (isPlaying) return
      else birthday.play()
    }, 2000)
    
    birthday.addEventListener('ended', () => isPlaying = false)
  }
})()