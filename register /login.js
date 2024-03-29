document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    document.getElementById('responseMessage').innerText = 'Consultando base de datos...';

    // Hacer una solicitud AJAX al servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = xhr.responseText;
                if (response === "El correo ya existe") {
                    document.getElementById('responseMessage').innerText = 'Login Exitoso';
                } else if (response === "Usuario creado correctamente") {
                    document.getElementById('responseMessage').innerText = 'Usuario no existe! Registrese';
                } else {
                    document.getElementById('responseMessage').innerText = 'Error en la solicitud al servidor';
                }
            } else {
                document.getElementById('responseMessage').innerText = 'Error en la solicitud al servidor';
            }
        }
    };
    xhr.send(JSON.stringify({ name: "", email: email }));
});
