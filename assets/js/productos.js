
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
    
    paginacion()



} 

document.getElementById("busqueda").addEventListener('keyup',(event) =>{
    let searchP =document.getElementById("busqueda").value;
    let prodFiltradors = productos.filter(p => p.category.includes(searchP));
    dibujarTabla(prodFiltradors);
});

function paginacion(){
    $("#nav").remove();

    $('#tabla').after('<div id="nav"></div>');
    var visibles = 15;
    var rowsTotal = $('#tabla tbody tr').length;
    var numPag = rowsTotal/visibles;
    for(i = 0;i < numPag;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a class="btn btn-secondary" href="#" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#tabla tbody tr').hide();
    $('#tabla tbody tr').slice(0, visibles).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var pagActual = $(this).attr('rel');
        var startItem = pagActual * visibles;
        var endItem = startItem + visibles;
        $('#tabla tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
    });
}
