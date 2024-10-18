function mostrarLogin() {
    document.getElementById('formulario-registro').classList.add('oculto');
    document.getElementById('formulario-login').classList.remove('oculto');
}

function mostrarRegistro() {
    document.getElementById('formulario-login').classList.add('oculto');
    document.getElementById('formulario-registro').classList.remove('oculto');
}


document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena,
        genero: genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.reset();

    mostrarLogin();
    
    alert('Registro exitoso. Por favor, inicia sesión.');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const correoLogin = document.getElementById('correo-login').value;
    const contrasenaLogin = document.getElementById('contrasena-login').value;

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado) {
        if (usuarioGuardado.correo === correoLogin && usuarioGuardado.contrasena === contrasenaLogin) {

            window.location.href = 'html/principal.html';
        } else {
            alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
    } else {
        alert('No hay un usuario registrado con ese correo. Por favor, regístrate primero.');
    }
});
