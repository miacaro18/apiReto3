function agregarScore(){
    let datos={
        valor:$("#valor").val()
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        //url:"http://localhost:8081/api/Score/save",
        url:"http://129.151.122.34:8081/api/Score/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listarScore();
            $("#valor").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
