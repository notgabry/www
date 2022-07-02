function lock() {
    let hide = document.getElementById('boxSuprema')
    hide.style.display = 'none'

    setTimeout(() => {
        let show = document.getElementById('boxSuprema')
        show.style.display = 'block'
        let load = document.getElementById('boxLoading')
        load.style.display = 'none'
    }, 3500)
}
lock()