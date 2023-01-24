const frame = () => {
    confetti({ 
        particleCount: 250,
        startVelocity: 80,
        angle: 60,
        spread: 55,
        origin: {
            x: 0,
            y: 1
        }
    })
  
    confetti({ 
        particleCount: 250,
        startVelocity: 80,
        angle: 120,
        spread: 55,
        origin: {
            x: 1,
            y: 1
        }
    })
  }
  
(async () => {
    const birthday = new Audio('/Public/Assets/Sounds/birthday.mp3')
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()
    if (month == 10 && day == 12) {
        const canvasConfetti = document.createElement('canvas')
        document.body.appendChild(canvasConfetti)
  
        confetti.create(canvasConfetti, {
            resize: true,
            useWorker: true
        })
        
        const h = document.getElementById('parId')
        h.innerHTML = `${twemoji.parse('🎂')} <strong>Today</strong> is my <strong>Birthday</strong> so Happy Birthday to me`
        
        setInterval(async () => {
            if (isPlaying) return
            else birthday.play()
            requestAnimationFrame(frame)
        }, 5000)
    }
})()