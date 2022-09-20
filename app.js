document.getElementById('jugador').addEventListener("mouseover",sumarPuntos);

let puntos = 0;
let tiempo = 30;
let necesarios = 45;
function sumarPuntos() {
    puntos++;
    document.getElementById("puntosP").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios +"</b>";
    randNUm= Math.round(Math.random()*500);
    randNUm2= Math.round(Math.random()*500);
    document.getElementById("jugador").style.marginTop = randNUm + "px";
    document.getElementById("jugador").style.marginLeft = randNUm2 + "px";
    if (puntos == 45) {
        alert("has ganado el juego, actualiza si quieres volver a jugar");
        document.write("<h1> ganaste. Actualiza para jugar otra vez</h1>");
    }
}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo Restante: "+tiempo;
    if (tiempo == 0) {
        alert("perdiste manito, actualiza para volver a jugar ");
    }
}

setInterval(restarTiempo,1000);