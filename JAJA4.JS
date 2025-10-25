function enviar(){
    goblin = Number(document.getElementById('goblin').value)
    esqueleto = Number(document.getElementById('esqueleto').value)
    orc = Number(document.getElementById('orc').value)
    mini_boss = Number(document.getElementById('boss').value)
    boss = Number(document.getElementById('boss2').value)
    plus_ultra_boss = Number(document.getElementById('boss3').value)
    
    /*
    pts_goblin = goblin*1
    pts_esqueleto= esqueleto*2
    pts_orc = orc*3
    pts_boss = boss*5
    pts_total = pts_goblin+pts_esqueleto+pts_orc+pts_boss
    */

    pts = (goblin*1)+(esqueleto*2)+(orc*3)+(mini_boss*5)+(boss*10)+(plus_ultra_boss*15)
    if(pts>= 50000000){
        nota = 'Plus Ultra/10'
    }else if(pts>= 50){
        nota = 'S'
    }else if(pts>= 45){
        nota = 'A'
    }else if(pts>= 40){
        nota = 'B'
    }else if(pts>= 35){
        nota = 'C'
    }else if(pts>= 30){
        nota = 'D'
    }else if(pts>=25){
        nota = 'E'
    }else{
        nota = 'F'
    }

    document.getElementById('relatorio').innerHTML=
    'A sua pontuação é de <b>'+pts+'</b>.'+
    '<br> Nota: '+nota
}