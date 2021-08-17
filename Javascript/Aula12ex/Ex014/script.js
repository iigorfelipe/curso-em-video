function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "Manhã.png"
        document.body.style.background = "#ead272"
    } else if (hora >= 12 && hora <= 18){
        img.src = "Tarde.png"
        document.body.style.background="#ffb839"
    } else {
        img.src = "Noite.png"
        document.body.style.background="#958a85"
    }
}