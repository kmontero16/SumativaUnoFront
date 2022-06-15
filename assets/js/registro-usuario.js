
const registroForm = document.querySelector('form');

var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        rutCompleto = rutCompleto.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp 	= rutCompleto.split('-');
        var digv	= tmp[1]; 
        var rut 	= tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
        
        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}

function limpiarFormulario() {
    document.getElementById("Form").reset();
  }

const limpiarFormulario = () => {
    document.getElementById("nombreMalo").innerHTML = ``;

};

registroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    let contadorInvalidaciones = 0;
    limpiarFormulario();


    let url = window.location.href;
    const form = Object.fromEntries(new FormData(event.target));
    let prefijo = "+56 9 ";
    
    if (!form.name) {
        ++contadorInvalidaciones;
        document.getElementById("nombreMalo").innerHTML = `Ingresa un nombre correctamente.`;
    } 
        

    if(!form.celular || form.celular.length < 8 || !(/([0-9]+)/g.test(form.celular))){
        ++contadorInvalidaciones;
        document.getElementById("celularMalo").innerHTML = `Ingresa un numero de celular correctamente.`;
    }

    let regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/g;
    if (!form.email || !(regexCorreo.test(form.email))) {
        document.getElementById("emailMalo").innerHTML = `Ingresa un email correctamente.`;
    }

    if(!form.pais){
        document.getElementById("paisMalo").innerHTML = `Ingresa un país correctamente.`;
    }

    if(!form.rut){
        document.getElementById("rutMalo").innerHTML = `Ingresa un rut correctamente. (xx.xxx.xxx-x)`;
    } else {
        document.getElementById("rutMalo").innerHTML = ``;
        if(!Fn.validaRut(form.rut)){
            document.getElementById("rutMalo").innerHTML = `Ingresa un rut correctamente. (xx.xxx.xxx-x)`;
        }
    }
    const REGEXPASS = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g;
    // debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
    if (!form.password || !(REGEXPASS.test(form.password))) {
        document.getElementById("passMalo").innerHTML = `Tu contraseña es incorrecta.`;
    }

    if(contadorInvalidaciones == 0){
        function crearUsuario({ name, celular, correo, pais, rut, password }) {
            usuarios.push({name, celular, correo, pais, rut, password  });
        
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        };

        crearUsuario({ name: form.name, celular: form.celular, correo: form.email, Pais: form.pais, rut: form.rut, Password: form.password });
        location.href = 'http://127.0.0.1:5501/index.html'

        limpiarFormulario();

      
        // usuarios.push(form);
       
    } 
});