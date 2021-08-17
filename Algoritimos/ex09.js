/*9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.*/

reais = 100
dolar = 3,45

compra = reais/dolar

reais = (reais).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

dolar = (compra).toLocaleString('eua', {style:'currency', currency:'USD'})


console.log(`Você possui ${reais}! Podendo comprar ${dolar}!`)