document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');
    const mensajeSpan = document.querySelector('.mensaje');
    const darkModeSwitch = document.getElementById('dark-mode-switch');

    // Función para alternar el modo oscuro
    function toggleDarkMode() {
        darkModeSwitch.classList.toggle('dark-mode-active');
        document.body.classList.toggle('dark-mode');
        form.classList.toggle('dark-mode');

        const header = document.querySelector('header');
        header.classList.toggle('dark-mode');
    }

    // Asignar evento de clic al switch (todo el contenedor)
    darkModeSwitch.addEventListener('click', toggleDarkMode);

    // Validación de email
    form.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            event.preventDefault();
            mensajeSpan.textContent = 'Por favor, ingresa un email válido.';
            mensajeSpan.style.color = 'red';
        } else {
            mensajeSpan.textContent = ''; // Limpiar el mensaje si es válido
        }
    });
});
