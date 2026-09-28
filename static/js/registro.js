/* =========================================================
   FORO NEXUS - JavaScript Vista Registro
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const formMessage = document.getElementById("formMessage");

    if (registerForm && formMessage) {
        registerForm.addEventListener("submit", (event) => {
            // Prevenimos el envío automático del navegador
            event.preventDefault();

            const usernameInput = document.getElementById("username");
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const confirmPasswordInput = document.getElementById("confirmPassword");
            const termsCheckbox = document.getElementById("terms");

            // Limpiar mensaje previo
            formMessage.textContent = "";
            formMessage.className = "form-message";

            // Validaciones de contraseñas
            if (passwordInput.value !== confirmPasswordInput.value) {
                formMessage.textContent = "Las contraseñas no coinciden.";
                formMessage.classList.add("error");
                confirmPasswordInput.focus();
                return;
            }

            if (passwordInput.value.length < 8) {
                formMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
                formMessage.classList.add("error");
                passwordInput.focus();
                return;
            }

            // Si las validaciones pasan en el cliente:
            formMessage.textContent = "¡Cuenta creada correctamente!";
            formMessage.classList.add("success");

            console.log("Datos listos para enviar a Flask:", {
                username: usernameInput ? usernameInput.value.trim() : "",
                email: emailInput ? emailInput.value.trim() : "",
                terms: termsCheckbox ? termsCheckbox.checked : false
            });
            /*
               Próximamente con Flask (Fetch API o submit tradicional):
               registerForm.submit();  <-- Si usas formulación estándar HTML/Flask
            */
        });
    }

    // LOG VISTA
    console.log("📝 ForoNexus: Módulo de Registro inicializado.");
});