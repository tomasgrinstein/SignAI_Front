// loadHeader.js

// Función para cargar y replicar el header desde otro archivo HTML
function copiarheader(../4pantalla../index.html, destinationId) {
    fetch(sourceUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo fuente: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            // Crear un contenedor temporal para analizar el contenido del HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Buscar el header en el documento cargado
            const originalHeader = doc.querySelector('#headerOriginal');
            if (!originalHeader) {
                throw new Error('No se encontró el header en el archivo fuente.');
            }

            // Obtener el destino donde se replicará el header
            const destination = document.getElementById(destinationId);
            if (!destination) {
                throw new Error('No se encontró el destino para replicar el header.');
            }

            // Clonar el contenido del header original
            const headerClone = originalHeader.cloneNode(true);
            destination.innerHTML = '';
            destination.appendChild(headerClone);
        })
        .catch(error => {
            console.error('Error al cargar el header:', error);
        });
}

// Llamar a la función cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {
    loadAndReplicateHeader('../1pantalla/index.html', 'headerDestino');
});
document.getElementById('bt').addEventListener('click', function() {
    window.location.href = '../2pantalla/index.html'; // Ruta al archivo HTML al que quieres redirigir
});
document.addEventListener('DOMContentLoaded', () => {
    const panelHeader = document.getElementById('fotito');
    const panelContent = document.getElementById('dropdown');

    panelHeader.addEventListener('click', () => {
        // Alternar la clase 'show' para mostrar/ocultar el contenido
        panelContent.classList.toggle('mostrar');
    });

    // Cerrar el panel si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!panelHeader.contains(event.target) && !panelContent.contains(event.target)) {
            panelContent.classList.remove('mostrar');
        }
    });
});
