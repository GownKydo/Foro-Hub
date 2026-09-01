/* =========================================
   FORO NEXUS
   JavaScript principal
========================================= */


/* =========================================
   ELEMENTOS
========================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

const searchButton = document.getElementById("searchButton");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");

const topics = document.querySelectorAll(".topic");
const categories = document.querySelectorAll(".category-card");


/* =========================================
   MENÚ MÓVIL
========================================= */

menuButton.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});


/* Cerrar menú al seleccionar una opción */

mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

    });

});


/* =========================================
   BUSCADOR
========================================= */

searchButton.addEventListener("click", () => {

    searchSection.classList.toggle("visible");

    if (searchSection.classList.contains("visible")) {

        searchInput.focus();

    }

});


closeSearch.addEventListener("click", () => {

    searchSection.classList.remove("visible");

    searchInput.value = "";

    showAllTopics();

});


/* =========================================
   BÚSQUEDA DE TEMAS
========================================= */

searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    if (!searchTerm) {

        showAllTopics();

        return;

    }


    topics.forEach(topic => {

        const text =
            topic.textContent
                .toLowerCase();

        if (text.includes(searchTerm)) {

            topic.style.display = "flex";

        } else {

            topic.style.display = "none";

        }

    });

});


function showAllTopics() {

    topics.forEach(topic => {

        topic.style.display = "flex";

    });

}


/* =========================================
   CATEGORÍAS
========================================= */

categories.forEach(category => {

    category.addEventListener("click", () => {

        const categoryName =
            category.dataset.category;

        console.log(
            `Categoría seleccionada: ${categoryName}`
        );

        /*
            Más adelante aquí podremos redirigir
            al usuario a:

            /categoria/historia
            /categoria/anime
            /categoria/videojuegos

            etc.
        */

    });

});


/* =========================================
   EFECTO SIMPLE AL HACER SCROLL
========================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.18)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   LOG
========================================= */

console.log(
    "ForoNexus iniciado correctamente."
);
