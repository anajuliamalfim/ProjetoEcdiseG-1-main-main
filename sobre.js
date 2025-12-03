let contador = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    proximoImagem();
}, 5000)

function proximoImagem(){
    contador++;
    if(contador>5){
        contador = 1;
    }
    document.getElementById("radio" + contador).checked = true;
}