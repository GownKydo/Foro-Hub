/* =========================================================
   FORO NEXUS - JavaScript Vista Login
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // MOSTRAR / OCULTAR CONTRASEÑA
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordInput = document.getElementById("password");

    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener("click", () => {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            passwordToggle.textContent = isPassword ? "🙈" : "👁";
            passwordToggle.setAttribute(
                "aria-label",
                isPassword ? "Ocultar contraseña" : "Mostrar contraseña"
            );
        });
    }

    // 2. MANEJO DEL FORMULARIO DE INICIO DE SESIÓN
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            // Nota: Si usas envío estándar de Flask (POST), eliminarás event.preventDefault()
            // Si usas Fetch API (AJAX), mantienes event.preventDefault()
            event.preventDefault();

            const emailInput = document.getElementById("email");
            const passwordVal = document.getElementById("password") ? document.getElementById("password").value : "";

            const email = emailInput ? emailInput.value.trim() : "";

            if (!email || !passwordVal) {
                console.warn("Por favor completa todos los campos.");
                return;
            }

            console.log("Intento de inicio de sesión con:", { email });

            /*
               Próximamente para Backend con Flask (ejemplo con Fetch):
               fetch('/login', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({ email, password: passwordVal })
               })
               .then(res => res.json())
               .then(data => { ... });
            */
        });
    }
});