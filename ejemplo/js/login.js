const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function buscarUsuario(email) {
    console.log({ usuarios })
    return usuarios.find(function(usuario) {
        return usuario.email === email
    });
};


const loginForm = document.querySelector('form#login');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.target));
    if (!form.correo) {
        return alert('El correo es obligatorio');
    }
    if (!form.password) {
        return alert('La contraseña es obligatoria');
    }

    const usuario = buscarUsuario(form.correo);
    if (!usuario) return alert('No estas registrado. Registrate!');
    if (usuario.password !== form.password) {
        return alert('Contraseña incorrecta');
    }

    sessionStorage.setItem('existeUsuario', 'si')
    location.href = 'http://127.0.0.1:5500/index.html'
})