function solo() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        res.innerHTML = 'Falta dados!'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando serotoninas: <br>'
        
        if (p == 0) {
            window.alert('0? vamos de 1 então')
            p = 1
        }
        for (let index = i; index <= f; index += p) {
            res.innerHTML += ` ${index}  \u{1F408} `
        }
        if (i > f) {
            for (let index = i; index >= f; index -= p) {
                res.innerHTML += ` ${index}  \u{1F408} `
            }

        }
        res.innerHTML += `  Serotonina é \u{1F44C} `

    }
}