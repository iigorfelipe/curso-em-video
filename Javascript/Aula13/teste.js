function vezesletra (frase, letra) {
    var vezes = 0;
    for (var index = 0; index < frase.length; index++){
        frase[index] == letra ? vezes++ : ''
    }
    return vezes
}