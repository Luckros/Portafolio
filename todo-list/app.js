const inputTarea = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');

function agregarTarea() {
    const texto = inputTarea.value.trim();

    if (texto !== "") {        
        const nuevoLi = document.createElement('li');
        nuevoLi.classList.add('tarea');

        nuevoLi.innerHTML = `
            <span class="texto">${texto}</span>
            <button class="btn-borrar">❌</button>
        `;

        listaTareas.appendChild(nuevoLi);
        inputTarea.value = "";
    }
}

btnAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

listaTareas.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('btn-borrar')) {
        e.target.parentElement.remove();
    }
        else if (e.target.classList.contains('texto')) {
        const li = e.target.parentElement;
        li.classList.toggle('completada');
    }
});