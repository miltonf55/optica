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
        var data = {
            name: $("#nom").val().split(" ").join(""),
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
                    $("#aviso").html(`
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Error</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        ${datae.ms}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                    </div>`)
                } else {
                    let html=grafica(datae.proyeccion, data.date);
                    $("#aviso").html(`
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Genial</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        ${datae.ms}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                    </div>`);
                }
            }
        });



    });

});
