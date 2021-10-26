function agregarMessa(){
    let datos={
        messageText:$("#messageText").val(),
        client:({"idClient":$("#clientMessa").val()}),
        computer:({"id":$("#computerMessa").val()})
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        //url:"http://localhost:8081/api/Message/save",
        url:"http://129.151.122.34:8081/api/Message/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listarMessa();
            $("#messageText").val(""),
            $("#clientMessa").val(""),
            $("#computerMessa").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
