async function cargarDatos() {   
    try {  
        const response = await fetch('../js/productos.json');  
        if (!response.ok) throw new Error('No se pudo cargar el JSON');  

        const datos = await response.json();  
        mostrarDatos(datos);  
    } catch (error) {  
        console.error('Error:', error);  
    }  
}  

function mostrarDatos(datos) {  
    const main = document.querySelector('.main1');   
    main.innerHTML = ''; 
   
    const categoriaActual = window.location.pathname.split('/').pop().split('.')[0]; 
    
    const productosFiltrados = datos.filter(item => item.categoria === categoriaActual);  

   
    productosFiltrados.forEach(item => {  
        const divContainer = document.createElement('div');  
        divContainer.classList.add('container');  

        divContainer.innerHTML = `  
            <div class="card">  
                <figure>  
                    <img src="${item.img}" alt="${item.titulo}">  
                </figure>  
                <div class="contenido">  
                    <h3>${item.titulo}</h3>  
                    <p>${item.contenido}</p>  
                    <p>${item.medida}</p>  <!-- Añadido para mostrar la medida -->  
                </div>  
            </div>  
        `;  
        main.appendChild(divContainer); 
    });  
}  

// Mostrar todos los productos al cargar la página  
document.addEventListener('DOMContentLoaded', () => {  
    mostrarProductos([]); // No mostrar productos al inicio  
    document.getElementById('search-input').addEventListener('input', filtrarProductos);  
});  
