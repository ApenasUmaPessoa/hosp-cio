function contar(){

    a = Number(document.getElementById('inicio').value)
    b = Number(document.getElementById('final').value)
    c = Number(document.getElementById('passo').value)

    for(i=a; i<=b; i+=c){
        document.getElementById('retorno').innerHTML += i+'<br>'
    }

}