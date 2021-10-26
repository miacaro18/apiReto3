//$(document).ready(function(){
    //listarScore();
//})

function listarScore(){
    $.ajax({
        //url:"http://localhost:8081/api/Score/all",
        url:"http://129.151.122.34:8081/api/Score/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuestaScore(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuestaScore(num,respu){
    $("#listScore").html("");
    $("#listScore").show(500);

    var tabla=`<table border="1">
              <tr>
                <th>Score</th>
              </tr>`;
              
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].valor}</td> 
                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listScore").html(tabla);
}


