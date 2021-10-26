//$(document).ready(function(){
    //listarMessa();
//})

function listarMessa(){
    $.ajax({
        url:"http://localhost:8081/api/Message/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuestaMessa(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuestaMessa(num,respu){
    $("#listMessa").html("");
    $("#listMessa").show(500);

    var tabla=`<table border="1">
              <tr>
                <th>Message</th>
                <th>Computer</th>
                <th>Client</th>
              </tr>`;
              
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].messageText}</td>
                    <td>${respu[i].computer.name}</td> 
                    <td>${respu[i].client.name}</td> 
                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listMessa").html(tabla);
}


