
window.addEventListener("load", ()=>{
    dibujarTabla(productos);
});


const dibujarTabla = (array) => {
    let inyecTabla = "";
    array.forEach( producto => inyecTabla+=`<tr>
                                    <th scope="row">${producto.id}</th>
                                    <td>${producto.name}</td>
                                    <td>${producto.precio}</td>
                                    <td>${producto.category}</td>
                                    </tr>`);
    document.getElementById("rellenarTabla").innerHTML = inyecTabla;
} 




document.getElementById("busqueda").addEventListener('keyup',(event) =>{
    let searchP = event.path[0].value;
    let prodFiltradors = productos.filter(p => p.category.includes(searchP));
    dibujarTabla(prodFiltradors);
});
