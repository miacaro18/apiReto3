//$(document).ready(function(){
    //listarCate();
//})

function listarCate(){
    $.ajax({
        //url:"http://localhost:8081/api/Category/all",
        url:"http://129.151.122.34:8081/api/Category/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuestaCate(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuestaCate(num,respu){
    $("#listCate").html("");
    $("#listCate").show(500);

    //<th>Compueter</th>
    var tabla=`<table border="1">
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>`;
    
    //<td>${respu[i].computers.name}</td>
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].name}</td> 
                    <td>${respu[i].description}</td> 
                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listCate").html(tabla);
}


