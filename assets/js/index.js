
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
  
     document.getElementById("alerta").classList.remove("d-none")
     document.getElementById("alerta").classList.add("d-flex")
    }
    
  }