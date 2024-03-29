/*document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Construir el objeto de datos a enviar
    var data = {
        email: email,
        password: password
    };

    // Crear una nueva instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud
    xhr.open('POST', 'http://localhost:8000/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Manejar el evento de carga
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // La solicitud fue exitosa
            var responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
        } else {
            // La solicitud falló
            console.error('Error:', xhr.statusText);
        }
    };

    // Manejar el evento de error
    xhr.onerror = function() {
        console.error('Error de red');
    };

    // Enviar la solicitud con los datos
    xhr.send(JSON.stringify(data));
});
