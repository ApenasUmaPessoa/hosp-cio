
function mudarCoisas(){

    caixa = document.getElementById('caixa')

    text = document.getElementById('text').value
    caixa.innerHTML = text
    
    largura = Number(document.getElementById('largura').value)
    caixa.style.width = largura+'px'

    altura = Number(document.getElementById('altura').value)
    caixa.style.height = altura+'px'

    cor = document.getElementById('cor').value
    caixa.style.backgroundColor = cor

    radius = Number(document.getElementById('radius').value)
    caixa.style.borderRadius = radius+'px'

    grosso = Number(document.getElementById('grosso').value)
    borcor = document.getElementById('borcor').value
    estilo = document.getElementById('estilo').value

    caixa.style.border = grosso+'px '+estilo+' '+borcor

}