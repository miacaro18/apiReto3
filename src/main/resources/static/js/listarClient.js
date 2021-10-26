//$(document).ready(function(){
    //listarClie();
//})

function listarClie(){
    $.ajax({
        url:"http://localhost:8081/api/Client/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuestaClie(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuestaClie(num,respu){
    $("#listClie").html("");
    $("#listClie").show(500);

    var tabla=`<table border="1">
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>age</th>
              </tr>`;
              
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].name}</td>
                    <td>${respu[i].email}</td>
                    <td>${respu[i].age}</td>
                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listClie").html(tabla);
}


