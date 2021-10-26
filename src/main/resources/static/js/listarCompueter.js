$(document).ready(function(){
    //listar();
})

function listar(){
    $.ajax({
        //url:"http://localhost:8081/api/Computer/all",
        url:"http://129.151.122.34:8081/api/Computer/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuesta(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuesta(num,respu){
    $("#listado").html("");
    $("#listado").show(500);

    var tabla=`<table border="1">
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Year</th>
                <th>Description</th>
                <th>Category</th>
              </tr>`;
              
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].name}</td> 
                    <td>${respu[i].brand}</td>
                    <td>${respu[i].year}</td>
                    <td>${respu[i].description}</td> 
                    <td>${respu[i].category.name}</td>

                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listComputer").html(tabla);
}


