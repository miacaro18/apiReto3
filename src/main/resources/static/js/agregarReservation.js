function agregarReser(){
    let datos={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        client:({"idClient":$("#clientReser").val()}),
        computer:({"id":$("#computerReser").val()}),
        score:({"id":$("#scoreReser").val()})
    }
    
    let datosPeticion=JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        url:"http://localhost:8081/api/Reservation/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success: function (respuesta){
            console.log("Insertado");
            listarReser();
            $("#startDate").val(""),
            $("#devolutionDate").val(""),
            $("#clientReser").val(""),
            $("#computerReser").val(""),
            $("#scoreReser").val("")
        },

        error:function(xhr,status){
            console.log(status);
        }
    });

}
