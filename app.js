// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let nombres = [];
//Funcion para añadir nombres a la lista o Array
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if(amigo !== ""){
        nombres.push(amigo);
        actualizarLista();
        document.getElementById("amigo").value = "";
    }
    else{
        alert('⚠️ La caja de texto está vacía. Por favor, escribe un nombre.');
    }
}

//Escucha la tecla enter en el input
//Selecciona el input del html, escucha cuando presionamos una tecla.
document.getElementById("amigo").addEventListener("keydown", function(event){
    if(event.key == "Enter"){ //Verifica si la tecla fue enter.
        agregarAmigo(); //llama a la funcion para añadir el nombre.
    }
});

// Función para actualizar la lista de nombres
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(amigo =>{
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

//Funcion para SortearAmigo random
function sortearAmigo(){
    if(nombres.length < 2){
        alert('⚠️ Agrega almenos dos amigos para poder realizar el sorteo!');
        return;
    }

    let amigoSecreto = [...nombres];
    amigoSecreto.sort(() => Math.random() -0.5);

    for(let i = 0; i < nombres.length; i++) {
        if(nombres[i] === amigoSecreto[i]){
            return sortearAmigo;
        }
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML ="";

    for(let i = 0; i < nombres.length; i++){
        resultado.innerHTML += `<li>${nombres[i]} → ${amigoSecreto[i]}</li>`;
    }
}
// Limpia la lista de amigos
function reinicioJuego(){
    document.getElementById('amigo').value = "";
    nombres = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}