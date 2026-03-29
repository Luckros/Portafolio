const inputBusqueda = document.getElementById('input-busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const resultados = document.getElementById('resultados');
const mensajeError = document.getElementById('mensaje-error');
const API_KEY = 'd561e140';

async function buscarPeliculas() {
    const espera = inputBusqueda.value.trim();

    if (espera === "") {
        mensajeError.textContent = "Por favor, ingresa un término de búsqueda.";
        mensajeError.classList.remove("oculto");
        resultados.innerHTML = "";
        return;
    }

    const url = `https://www.omdbapi.com/?s=${espera}&apikey=${API_KEY}`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);

        if (datos.Response === "True") {
            resultados.innerHTML = "";
            mensajeError.classList.add("oculto");
            
            const listaDePeliculas = datos.Search;
            
            listaDePeliculas.forEach(pelicula => {
                const tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjeta-peli');

                const imagen = pelicula.Poster !== "N/A" ? pelicula.Poster : "https://placehold.jp/300x450.png?text=Sin+Imagen";
                
                tarjeta.innerHTML = `
                    <img src="${imagen}" alt="${pelicula.Title}">
                    <h3>${pelicula.Title}</h3>
                    <p>Año: ${pelicula.Year}</p>
                `;
                resultados.appendChild(tarjeta);   
            });
        } else {
            resultados.innerHTML = "";
            mensajeError.textContent = datos.Error; 
            mensajeError.classList.remove("oculto");
        }
    } catch (error) {
        console.error("Error crítico:", error);
        resultados.innerHTML = "";
        mensajeError.textContent = "Hubo un problema al conectar con el servidor.";
        mensajeError.classList.remove("oculto");
    }
}

btnBuscar.addEventListener('click', buscarPeliculas);



 
