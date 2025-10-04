
function tarefa(){

    numero = Number(document.getElementById('numero').value)

    if( numero > 0 ){
        alert('positivo')
    }else if( numero < 0 ){
        alert('negativo')
    }else{
        alert('neutro')
    }
    
}