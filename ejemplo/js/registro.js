const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function crearUsuario({ email, name, password }) {
    usuarios.push({ email, name, password });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
};


const registroForm = document.querySelector('form#registro');

registroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.target));
    if (!form.name) {
        return alert('El nombre es obligatorio');
    }
    if (!form.email) {
        return alert('El correo es obligatorio');
    }
    if (!form.password) {
        return alert('La contraseña es obligatoria');
    }

    crearUsuario({ name: form.name, password: form.password, email: form.email });
    location.href = 'http://127.0.0.1:5500/login.html'
})