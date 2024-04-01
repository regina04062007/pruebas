function validarFormulario() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('name').value;

    if (!email.endsWith('@alumno.ipn.mx')) {
        alert('El correo electronico debe terminar en @alumno.ipn.mx');
        return false;
    }

    if (password.length !== 8) {
        alert('La contraseña debe tener exactamente 8 caracteres');
        return false;
    }

    if (username.length <= 6) {
        alert('El nombre de usuario debe tener más de 6 caracteres');
        return false;
    }

    return true; 
}

