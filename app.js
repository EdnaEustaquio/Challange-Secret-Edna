// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let compis = [];

function agregarAmigo (){

    let nombres = document.getElementById("amigo").value;
    if (nombres == "")
    { alert("Por favor, inserte un nombre.")}
    else{
        compis.push(nombres);
        document.getElementById("amigo").value = "";
        console.log("lista de amigos es ", compis);
        mostrarLista();
    }

}
function mostrarLista (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let listaHTML = "";
    for (i=0; i<compis.length ; i++){
        listaHTML += `<li> ${compis[i]}</li>`;
    }
    lista.innerHTML = listaHTML;


}

function sortearAmigo (){
    if (compis.length === 0){
        alert("Tu lista esta vacia");
    }
    else {
        let numeroGenerado = Math.floor(Math.random()* compis.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tu amigo sorteado es: ${compis[numeroGenerado]}`;
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
    }



}

function reiniciarJuego(){
    compis = [];
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let resultado= document.getElementById('resultado');
    resultado.innerHTML="";


}
