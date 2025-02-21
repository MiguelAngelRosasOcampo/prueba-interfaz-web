document.addEventListener("DOMContentLoaded", () =>{
    const contenido = document.getElementById("contenido");
    const inputContenido = document.getElementById("inputContenido");
    const botonCambiar = document.getElementById("botonCambiar");

    botonCambiar.addEventListener("click", () =>{
        contenido.textContent = inputContenido.value;
    });
    
});