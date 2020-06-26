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
    $(document).ready(() => {
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
                                <button type="button" class="close" data-dismiss="modal" id="res2" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            ${datae.ms}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal" id="res">Cerrar</button>
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
                                <button type="button" class="close" data-dismiss="modal" id="res2" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            ${datae.ms}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-dismiss="modal" id="res">Cerrar</button>
                            </div>
                            </div>
                        </div>
                        </div>`);
                    }
                }
            });



        });
        $("#res").on("click", () => {
            $("#aviso").html(`<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Al presionar el botón de "Aceptar" aceptas nuestros <a href="#">terminos y condiciones</a> asi como nuestro <a href="#">aviso de privacidad</a>.
                    <div class="g-recaptcha" data-sitekey="6LdJrqkZAAAAAMRwGIRlX4NB3lfsBRNXhWk6yfFB"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="contact">Aceptar</button>
                </div>
                </div>
            </div>
            </div>`);
        });
        $("#res2").on("click", () => {
            $("#aviso").html(`<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Al presionar el botón de "Aceptar" aceptas nuestros <a href="#">terminos y condiciones</a> asi como nuestro <a href="#">aviso de privacidad</a>.
                    <div class="g-recaptcha" data-sitekey="6LdJrqkZAAAAAMRwGIRlX4NB3lfsBRNXhWk6yfFB"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="contact">Aceptar</button>
                </div>
                </div>
            </div>
            </div>`);
        });
    });

});
