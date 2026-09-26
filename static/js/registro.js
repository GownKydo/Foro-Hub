event.preventDefault();

formMessage.textContent = "";
formMessage.className = "form-message";

if (password.value !== confirmPassword.value) {

    formMessage.textContent =
        "Las contraseñas no coinciden.";

    formMessage.classList.add("error");

    confirmPassword.focus();

    return;
}

if (password.value.length < 8) {

    formMessage.textContent =
        "La contraseña debe tener al menos 8 caracteres.";

    formMessage.classList.add("error");

    password.focus();

    return;
}

formMessage.textContent =
    "¡Cuenta creada correctamente!";

formMessage.classList.add("success");

/*
 * Aquí posteriormente puedes conectar
 * el formulario con PHP, Node.js,
 * Firebase, MySQL, etc.
 */
