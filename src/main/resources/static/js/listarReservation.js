//$(document).ready(function(){
    //listarReser();
//})

function listarReser(){
    $.ajax({
        url:"http://localhost:8081/api/Reservation/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuestaReser(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuestaReser(num,respu){
    $("#listReser").html("");
    $("#listReser").show(500);

    var tabla=`<table border="1">
              <tr>
                <th>Start Date</th>
                <th>Devolution Date</th>
                <th>Computer</th>
                <th>Client</th>
                <th>Score</th>
              </tr>`;
              
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].startDate}</td> 
                    <td>${respu[i].devolutionDate}</td> 
                    <td>${respu[i].computer.name}</td> 
                    <td>${respu[i].client.name}</td> 
                    <td>${respu[i].score.valor}</td> 
                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listReser").html(tabla);
}


