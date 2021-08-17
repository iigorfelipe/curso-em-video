let num = [4, 6, 8, 1]
let pos = num.indexOf(8)
console.log(`Esse é seu vetor: ${num}`)
console.log(`O primeiro valor dele é ${num[0]}`)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
} num.sort()
console.log(`Seu vetor em ordem crescente: ${num}`)