function agregarClie(){
    let datos={
        name:$("#nameClie").val(),
        password:$("#passwordClie").val(),
        email:$("#emailClie").val(),
        age:$("#ageClie").val()
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        //url:"http://localhost:8081/api/Client/save",
        url:"http://129.151.122.34:8081/api/Client/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listarClie();
            $("#nameClie").val(""),
            $("#passwordClie").val(""),
            $("#emailClie").val(""),
            $("#ageClie").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
