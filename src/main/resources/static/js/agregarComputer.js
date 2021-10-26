function agregar(){
    let datos={
        //cate = ({"id":$("#category").val()}),
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        category:({"id":$("#category").val()})
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        url:"http://localhost:8081/api/Computer/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listar();
            $("#name").val(""),
            $("#brand").val(""),
            $("#year").val(""),
            $("#description").val(""),
            $("#category").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
