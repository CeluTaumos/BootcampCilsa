document.addEventListener('DOMContentLoaded', function () {
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    const darkModeLink = document.getElementById('dark-mode');
    const form = document.getElementById('formulario');
    const mensajeSpan = document.querySelector('.mensaje'); 
    const darkModeSwitch = document.getElementById('dark-mode-switch');

    //modo oscuro
    function toggleDarkMode() {
        darkModeLink.disabled = !darkModeLink.disabled;
        darkModeSwitch.classList.toggle('dark-mode-active');
        document.body.classList.toggle('dark-mode');
    }

   
    darkModeIcon.addEventListener('click', toggleDarkMode);
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
            mensajeSpan.textContent = ''; 
        }
    });
});
