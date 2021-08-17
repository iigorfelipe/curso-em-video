var quebrada = false;
function estado(tipo) {
    if (!quebrada) {
        document.getElementById('luz').src = tipo + '.jpg'
        } if(tipo == 'quebrada') {
            quebrada = true;
        }
    }
function concertar() {
    if (!quebrada) {
        window.alert("A lampada não precisa de concerto!")
    } else {
        quebrada = false
        return estado('apagada')
    }
}