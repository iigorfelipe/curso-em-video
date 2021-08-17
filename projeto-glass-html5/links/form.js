function calc_total(){  
    var quantidade = Number(document.getElementById("quantidade").value);
    total = quantidade * 1500
    document.getElementById('preco').value = total
}