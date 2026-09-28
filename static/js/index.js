/* =========================================
   FORO NEXUS - JavaScript Vista Inicio (Index)
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // ELEMENTOS ESPECÍFICOS DE INDEX
    const searchInput = document.getElementById("searchInput");
    const topics = document.querySelectorAll(".topic");
    const categories = document.querySelectorAll(".category-card");

    // BÚSQUEDA Y FILTRADO DE TEMAS
    if (searchInput && topics.length > 0) {
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (!searchTerm) {
                showAllTopics();
                return;
            }
            topics.forEach(topic => {
                const text = topic.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    topic.style.display = "flex";
                } else {
                    topic.style.display = "none";
                }
            });
        });
    }

    function showAllTopics() {
        topics.forEach(topic => {
            topic.style.display = "flex";
        });
    }

    // CATEGORIAS
    if (categories.length > 0) {
        categories.forEach(category => {
            category.addEventListener("click", () => {
                const categoryName = category.dataset.category;
                console.log(`Categoría seleccionada: ${categoryName}`);
                /*
                   Redirección o filtrado dinámico futuro:
                   window.location.href = `/categoria/${categoryName}`;
                */
            });
        });
    }

    // LOG VISTA
    console.log("🏠 ForoNexus: Módulo de Inicio inicializado.");
});