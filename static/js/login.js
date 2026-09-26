/* =========================================================
   LOGIN
========================================================= */

const passwordToggle = document.getElementById("passwordToggle");
const passwordInput = document.getElementById("password");

if (passwordToggle && passwordInput) {

    passwordToggle.addEventListener("click", () => {

        const isPassword =
            passwordInput.type === "password";

        passwordInput.type =
            isPassword ? "text" : "password";

        passwordToggle.textContent =
            isPassword ? "🙈" : "👁";

        passwordToggle.setAttribute(
            "aria-label",
            isPassword
                ? "Ocultar contraseña"
                : "Mostrar contraseña"
        );

    });

}


/* =========================================================
   LOGIN FORM
========================================================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        if (!email || !password) {
            return;
        }

        /*
         * Aquí posteriormente conectarás
         * el formulario con tu backend.
         */

        console.log("Intento de inicio de sesión:", {
            email
        });

    });

}