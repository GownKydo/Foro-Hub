/* =========================================
   FORO NEXUS - JavaScript Principal (Global)
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // ELEMENTOS GLOBALES
    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");
    const searchButton = document.getElementById("searchButton");
    const searchSection = document.getElementById("searchSection");
    const searchInput = document.getElementById("searchInput");
    const closeSearch = document.getElementById("closeSearch");

    // MENÚ MÓVIL
    if (menuButton && mainNav) {
        menuButton.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });

        // Cerrar menú al seleccionar una opción
        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
            });
        });
    }

    // BUSCADOR GLOBAL
    if (searchButton && searchSection) {
        searchButton.addEventListener("click", () => {
            searchSection.classList.toggle("visible");
            if (searchSection.classList.contains("visible") && searchInput) {
                searchInput.focus();
            }
        });
    }

    if (closeSearch && searchSection) {
        closeSearch.addEventListener("click", () => {
            searchSection.classList.remove("visible");
            if (searchInput) {
                searchInput.value = "";
                // Disparamos el evento 'input' para que si index.js está escuchando, resetee los temas
                searchInput.dispatchEvent(new Event("input"));
            }
        });
    }

    // EFECTO SCROLL HEADER
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (header) {
            if (window.scrollY > 20) {
                header.style.boxShadow = "0 8px 30px rgba(0,0,0,.18)";
            } else {
                header.style.boxShadow = "none";
            }
        }
    });

    // LOG GLOBAL
    console.log("⚡ ForoNexus: JavaScript global cargado correctamente.");
});