/* =========================
   CAMBIAR DE PANTALLA
========================= */

function irA(pantalla) {

    const pantallas =
        document.querySelectorAll(".pantalla");

    pantallas.forEach(function(p) {

        p.classList.remove("activa");

    });


    const nuevaPantalla =
        document.getElementById(pantalla);

    nuevaPantalla.classList.add("activa");

    nuevaPantalla.scrollTop = 0;


    /* Reiniciar animación de fotos */

    if (pantalla === "historia") {

        const progreso =
            document.querySelector(".progreso");

        const carrito =
            document.querySelector(".carrito");

        progreso.style.width = "0%";

        carrito.style.transform =
            "translateX(0)";


        const fotos =
            document.querySelectorAll("#fotos img");

        fotos.forEach(function(foto) {

            foto.classList.remove("mostrar");

        });


        setTimeout(function() {

            progreso.style.width = "100%";

            carrito.style.transform =
                "translateX(calc(70vw - 100px))";

        }, 300);


        fotos.forEach(function(foto, index) {

            setTimeout(function() {

                foto.classList.add("mostrar");

            }, 700 + index * 600);

        });

    }
}


/* =========================
   VOLVER AL PRINCIPIO
========================= */

function volverInicio() {

    document.querySelectorAll(".pantalla")
        .forEach(function(p) {

            p.classList.remove("activa");

        });


    document
        .getElementById("inicio")
        .classList.add("activa");

}


/* =========================
   ESTRELLAS
========================= */

const contenedorEstrellas =
    document.querySelector(".estrellas");


for (let i = 0; i < 220; i++) {

    const estrella =
        document.createElement("span");


    estrella.style.position =
        "absolute";


    const tamaño =
        Math.random() * 3 + 1;


    estrella.style.width =
        tamaño + "px";

    estrella.style.height =
        tamaño + "px";


    estrella.style.background =
        "white";


    estrella.style.borderRadius =
        "50%";


    estrella.style.left =
        Math.random() * 100 + "%";


    estrella.style.top =
        Math.random() * 100 + "%";


    estrella.style.opacity =
        Math.random();


    estrella.style.boxShadow =
        "0 0 7px white";


    estrella.style.animation =
        "parpadear " +
        (2 + Math.random() * 4) +
        "s infinite";


    estrella.style.animationDelay =
        Math.random() * 3 + "s";


    contenedorEstrellas.appendChild(
        estrella
    );

}


/* =========================
   ESTILO DE ESTRELLAS
========================= */

const estilo =
    document.createElement("style");


estilo.innerHTML = `

@keyframes parpadear {

    0%, 100% {
        opacity: .15;
        transform: scale(.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.3);
    }

}

`;


document.head.appendChild(estilo);