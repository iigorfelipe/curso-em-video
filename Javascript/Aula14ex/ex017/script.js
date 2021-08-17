function gerarTabuada() {
    let numero = document.getElementById('numero')
    let menu = document.getElementById('menu')
    if (numero.value == '') {
        window.alert('Digite um número!')
    } else {
        menu.innerHTML = ''
        let n = Number(numero.value)
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `menu${i}`
            menu.appendChild(item)
        }
    }
} function limpar() {
    menu.innerHTML = '<option>Digite um número acima.</option>'
}