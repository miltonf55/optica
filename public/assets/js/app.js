$(() => {
    function proyeccionCB() {
        let d=dateN();
        let data = {
            id: "38",
            date: d
        }
        $.ajax({
            url: "/proyectoX",
            method: "POST",
            data,
            success: (datae) => {
                if (!datae.ok) {
                    $("#chart").html(`<div class="alert alert-danger" role="alert">${datae.ms}</div>`)
                } else {
                    let html=grafica(datae.proyeccion, data.date);
                    $("#chart").html(html);
                }
            }
        });
    }

    $("#contact").on("click", () => {
        $("#chart").html(`<div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                        </div>`);
        var data = {
            name: $("#nom").val().split(" ").join(""),
            date: dateN(),
            correo: $("#email").val().split(" ").join(""),
            tel: $("#tel").val().split(" ").join(""),
            comentario: $("#com").val().split(" ").join("")
        }
        $.ajax({
            url: "/contactame",
            method: "POST",
            data,
            success: (datae) => {
                if (!datae.ok) {
                    $("#aviso").html(`<div class="alert alert-danger" role="alert">${datae.ms}</div>`)
                } else {
                    let html=grafica(datae.proyeccion, data.date);
                    $("#aviso").html(html);
                }
            }
        });



    });
    function dateN(){
        var fecha = new Date(); 
        var mes = fecha.getMonth()+1;
        var dia = fecha.getDate();
        var ano = fecha.getFullYear();
        if(dia<10)
            dia='0'+dia; 
        if(mes<10)
            mes='0'+mes;
        let f=ano+"-"+mes+"-"+dia;
        return f;
    }

});
