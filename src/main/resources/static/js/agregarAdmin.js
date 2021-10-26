function agregarAdmin(){
    let datos={
        nombre:$("#nombre").val(),
        clave:$("#clave").val()
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        //url:"http://localhost:8081/api/Admin/save",
        url:"http://129.151.122.34:8081/api/Admin/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listarAdmin();
            $("#nombre").val(""),
            $("#clave").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
