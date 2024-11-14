const productos = [  
    {  
        "titulo": "Pasacalle 15",  
        "contenido": "precio $10.000",  
        "medida": "Medida: 2.0 x 0.7 m",  
        "img": "/assets/imagenes/imagenes2/15_1.webp",  
        "categoria": "pasacalles-15",  
        "precio": 10000   
    },  
    {  
        "titulo": "Pasacalle 15",  
        "contenido": "precio $12.000",  
        "medida": "Medida: 3.0 x 0.7 m",  
        "img": "/assets/imagenes/imagenes2/15_2.webp",  
        "categoria": "pasacalles-15",  
        "precio": 12000  
    },   
    {  
        "titulo": "baners con portabaners de 15",  
        "contenido": "precio $30.000",  
        "medida": "Medida: 1.9 x 0.9 m",  
        "img": "/assets/imagenes/imagenes2/baner_15_años.jpg",  
        "categoria": "pasacalles-15",  
        "precio": 30000  
    },   
    {  
        "titulo": "Pasacalle 18",  
        "contenido": "precio $10.000",  
        "medida": "Medida: 2 x 0.7 m",  
        "img": "/assets/imagenes/imagenes2/18-IMG.jpeg",  
        "categoria": "pasacalles-18",  
        "precio": 10000  
    },   
    {  
        "titulo": "Pasacalle 18",  
        "contenido": "precio $12.000",  
        "medida": "Medida: 3 x 0.7 m",  
        "img": "/assets/imagenes/imagenes2/WhatsApp Image 2024-07-03 at 12.43.40 PM.jpeg",  
        "categoria": "pasacalles-18",  
        "precio": 12000  
    },  
    {  
        "titulo": "Pasacalle 18",  
        "contenido": "precio $15.000",  
        "medida": "Medida: 4 x 0.7 m",  
        "img": "/assets/imagenes/imagenes2/18-AÑOS.jpeg",  
        "categoria": "pasacalles-18",  
        "precio": 15000  
    },  
    {  
        "titulo": "almadones",  
        "contenido": "precios $8.000 ",    
        "medida": "por unidad",  
        "img": "/assets/imagenes/imagenes2/almadones.webp",   
        "categoria": "sublimacion",  
        "precio": 8000  
    },  
    {  
        "titulo": "gorras",  
        "contenido": "precios $5.000 c/u",   
        "medida": "por unidad",  
        "img": "/assets/imagenes/imagenes2/gorras_sublimadas.jpg",  
        "categoria": "sublimacion",          
        "precio": 5000  
    },   
    {  
        "titulo": "tazas",  
        "contenido": "precios $6.000 c/u",   
        "medida": "por unidad",  
        "img": "/assets/imagenes/imagenes2/trizi.jpg",  
        "categoria": "sublimacion",  
        "precio": 6000  
    }  
];  

// Función para renderizar los productos  
function mostrarProductos(productos) {  
    const container = document.getElementById('productos-container');  
    container.innerHTML = ''; // Limpiar el contenedor  

    productos.forEach(producto => {  
        const tarjeta = `  
            <div class="producto-tarjeta">  
                <img src="${producto.img}" alt="${producto.titulo}">  
                <h2>${producto.titulo}</h2>  
                <p>${producto.contenido}</p>  
                <p>${producto.medida}</p>  
            </div>  
        `;  
        container.innerHTML += tarjeta;  
    });  
    
    // Muestra el contenedor de productos solamente si hay productos encontrados  
    if (productos.length > 0) {  
        container.style.display = 'flex'; // Muestra el contenedor de productos  
    } else {  
        container.style.display = 'none'; // Oculta si no hay productos encontrados  
    }  
}  

// Filtrar productos según búsqueda  
function filtrarProductos() {  
    const input = document.getElementById('search-input').value.toLowerCase();  
    const precio = parseInt(input.replace(/\D/g, ''), 10); // Extrae el número de la entrada  

    // Filtrar productos solo si hay entrada en el campo de búsqueda  
    if (input) {  
        const productosFiltrados = productos.filter(producto =>  
            producto.titulo.toLowerCase().includes(input) || // Filtrar por título  
            producto.precio === precio // Filtrar por precio  
        );  

        // Ordenar los productos filtrados por precio de menor a mayor  
        productosFiltrados.sort((a, b) => a.precio - b.precio);  

        mostrarProductos(productosFiltrados); // Muestra solo los productos encontrados  
        document.querySelector('.contenedor').style.display = 'none'; // Oculta el div con clase "contenedor"  
    } else {  
        mostrarProductos([]); // No muestra ningún producto si el input está vacío  
        document.querySelector('.contenedor').style.display = 'block'; // Muestra el div con clase "contenedor" si no hay búsqueda  
    }  
}  