function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex')
    var gênero = ''
    var idade = ano - Number(fAno.value)
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')

    if (fAno.value == 0 || Number(fAno.value) > ano) {
        window.alert('Ta de brinks?kkkkk')
    } else if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade > 0 && idade < 14) {
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 22) {
           img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'foto-idoso-m.png')
        }
    } else {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 14) {
           img.setAttribute('src', 'foto-bebe-f.png')
        } else if (idade < 22) {
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
            img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
    res.appendChild(img)
}