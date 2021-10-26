function agregarCate(){
    let datos={
        name:$("#nameCate").val(),
        description:$("#descriptionCate").val()
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        url:"http://localhost:8081/api/Category/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listarCate();
            $("#nameCate").val(""),
            $("#descriptionCate").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
