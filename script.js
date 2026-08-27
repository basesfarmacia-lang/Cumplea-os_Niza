/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const botonComenzar = document.getElementById("botonComenzar");
const inicio = document.getElementById("inicio");
const escenaCortinas = document.getElementById("escenaCortinas");
const contenido = document.getElementById("contenido");
const cancion = document.getElementById("cancion");
const repetir = document.getElementById("repetir");

/* ========================================= */
/* COMENZAR SORPRESA */
/* ========================================= */

function comenzarSorpresa() {

    cancion.currentTime = 0;

    cancion.play().catch(function(error) {
        console.log("No se pudo iniciar el audio:", error);
    });

    /* Ocultar pantalla inicial */
    inicio.style.display = "none";

    /* Mostrar cortinas */
    escenaCortinas.classList.add("activa");

    setTimeout(function() {
        escenaCortinas.classList.add("abierta");
    }, 700);

    setTimeout(function() {
        escenaCortinas.classList.remove("activa");
        contenido.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 4500);
}

/* ========================================= */
/* BOTÓN COMENZAR */
/* ========================================= */

botonComenzar.addEventListener("click", comenzarSorpresa);

/* ========================================= */
/* REPETIR */
/* ========================================= */

repetir.addEventListener("click", function() {

    contenido.classList.remove("visible");

    cancion.currentTime = 0;
    cancion.play().catch(function() {});

    escenaCortinas.classList.add("activa");
    escenaCortinas.classList.remove("abierta");

    setTimeout(function() {
        escenaCortinas.classList.add("abierta");
    }, 700);

    setTimeout(function() {
        escenaCortinas.classList.remove("activa");
        contenido.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 4500);
});