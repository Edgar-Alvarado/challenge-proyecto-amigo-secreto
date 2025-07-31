// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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