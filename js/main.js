const inputAgregar = document.getElementById('inputAgregar');
const botonAgregar = document.getElementById('botonAgregar');
const contenido = document.getElementById('contenido');

inputAgregar.value = '';

botonAgregar.addEventListener('click', agregarContenido)
inputAgregar.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){   
        event.preventDefault();
        agregarContenido(event);
        inputAgregar.value = '';
    }

        
})
function agregarContenido()
{
    contenido.textContent ? (contenido.textContent += " " + inputAgregar.value) : (contenido.textContent = inputAgregar.value);
}