let num = [6, 11, 7, 2]
num.sort() // organiza o vetor em ordem crescente baseado no primeiro numero de cada valor.
num.sort((a, b) => a - b) // ordem crescente real oficial
/*num.sort()
for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} possui o valor ${num[i]}`)
}

agora de uma forma mais simplicada
*/

for(i in num){ // não precisa definir um valor pra let
    console.log(`A posição ${i} possui o valor ${num[i]}`)
}