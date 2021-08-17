var numero = document.querySelector('input#mais1')
var numero2 = document.querySelector('input#mais2')
var res = document.querySelector('div#res')
var soma = numero.value && numero2.value
var operacao = document.querySelector('input#operacao')

function calcular(){
operacao.value == '+' ? res.innerHTML = Number(numero.value) + Number(numero2.value):''
operacao.value == '-' ? res.innerHTML = Number(numero.value) - Number(numero2.value):''
operacao.value == '*' ? res.innerHTML = Number(numero.value) * Number(numero2.value):''
operacao.value == '/' ? res.innerHTML = Number(numero.value) / Number(numero2.value):''
operacao.value == '%' ? res.innerHTML = Number(numero.value) % Number(numero2.value):''

}