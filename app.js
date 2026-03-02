<<<<<<< HEAD
// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los enlaces de navegación y todas las secciones
=======
document.addEventListener('DOMContentLoaded', () => {
>>>>>>> 1e4bd0a22bd43b6f2721accec7060d613a3b5eda
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
<<<<<<< HEAD
            e.preventDefault(); // Evita que el link recargue la página o salte bruscamente

            // 1. Quitar la clase 'active' de todos los enlaces y secciones
            navLinks.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // 2. Añadir la clase 'active' al enlace clickeado
            this.classList.add('active');

            // 3. Obtener el id de la sección a mostrar desde el atributo data-target
            const targetId = this.getAttribute('data-target');
            
            // 4. Mostrar la sección correspondiente
=======
            e.preventDefault(); 

            navLinks.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            this.classList.add('active');

            const targetId = this.getAttribute('data-target');
>>>>>>> 1e4bd0a22bd43b6f2721accec7060d613a3b5eda
            document.getElementById(targetId).classList.add('active');
        });
    });
});