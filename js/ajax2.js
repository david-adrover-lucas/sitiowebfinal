const form = document.getElementById('contactForm');  
const modal = document.getElementById('modal');  
const modalMessage = document.getElementById('modal-message');  

form.addEventListener('submit', function(event) {  
    event.preventDefault(); // Evita el envío del formulario para validar primero  
    
    const nombreInput = document.getElementById('nombre');  
    const emailInput = document.getElementById('correo');  
    const mensajeInput = document.getElementById('mensaje');  

    // Validar que todos los campos estén llenos  
    if (!nombreInput.value || !emailInput.value || !mensajeInput.value) {  
        showModal("Por favor, complete todos los campos.");  
        return;  
    }  
    
    // Validar correo electrónico  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
    if (!emailPattern.test(emailInput.value)) {  
        showModal("Por favor, ingrese un correo válido.");  
        return;  
    }   

    showModal("¡Muchas gracias por tu mensaje!");  
    form.reset(); // Limpia los campos del formulario  
});  

function showModal(message) {  
    modalMessage.textContent = message;  
    modal.style.display = "flex"; // Muestra el modal  
}  

function closeModal() {  
    modal.style.display = "none"; // Oculta el modal  
}  