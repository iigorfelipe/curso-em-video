let numero = document.getElementById('num')
let menu = document.getElementById('menu')
let res = document.getElementById('res')
var v = []

function add() {
    var n = Number(numero.value)
    var item = document.createElement('option')

    if (n < 1 || n > 100 || n == '' || v.indexOf(n) != -1) {
        window.alert('Valor inválido ou já adicionado!')
    } else {
        v.push(n)
        item.text = `Valor ${n} adicionado.`
        menu.appendChild(item)
        res.innerText = ''
        numero.value = ''
        numero.focus()
    }
}

function concluir() {
    if (v.length == '') {
        res.innerText = 'Adicione um número primeiro!'
    } else {
        v.sort((a, b) => a - b)
        var soma = 0
        for (let i in v) {
            soma += v[i]
        }
        var media = soma / v.length
        res.innerText = `\n Ao todo, temos ${v.length} números cadastrados.`
        res.innerText += `\n\r O maior valor informado foi ${v[v.length - 1]}`
        res.innerText += `\n\r O menor valor informado foi ${v[0]}`
        res.innerText += `\n\r Somando todos os valores, temos ${soma}`
        res.innerText += `\n\r A média dos valores digitados é ${media.toFixed(2)}`
    }
}

function limpar() {
    menu.innerText = ''
    res.innerText = ''
    v = []
}