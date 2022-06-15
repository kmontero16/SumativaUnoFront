
function validar() {
    var p = document.getElementById("typePasswordX").value;
    var e = document.getElementById("typeEmailX").value;
    var flag = true

    usuarios.forEach(u => {
      if (u.email == e && u.password == p) {
        window.location.href = "productos.html"
        flag= false
      }
    });
    if (flag){
     alert("correo o contraseña incorrecta") 
    }
    
  }