document.addEventListener('DOMContentLoaded', function () {
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    const darkModeLink = document.getElementById('dark-mode');
    const form = document.getElementById('formulario');
    const mensajeSpan = document.querySelector('.mensaje'); 


    darkModeIcon.addEventListener('click', function () {
        if (darkModeLink.disabled) {
            darkModeLink.disabled = false;
        } else {
            darkModeLink.disabled = true;
        }
    });

    // Validación de email -- PRACTICA JS
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
