const express = require("express");
const validaciones = require("../middlewares/validaciones.js");

const app = express();

app.post("/contactame", (req, res) => {
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    /*if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
    }*/
    // Put your secret key here.
    var secretKey = "6LdJrqkZAAAAAPzdsqN_M_TBne70pEoitvE9B4ka";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl,function(error,response,body) {
        Rbody = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if(Rbody.success !== undefined && !Rbody.success) {
            return res.json({ok : false, ms : "Fallo la verificación de Captcha"});
        }else{
            let body = req.body;
            let data = {
                name: body.name,
                date: dateN(),
                mail: body.correo,
                tel: body.tel,
                com: body.com
            };
                if (name.split(" ").join("") == "" || mail.split(" ").join("") == "" || tel.split(" ").join("") == "" || com.split(" ").join("") == "") {
                    res.json({
                        ok: false,
                        mensaje: "Debes llenar todos los campos para que te podamos contactar"
                    });
                } else if (!validaciones.letras(Usuario.nombre)) {
                    res.json({
                        ok: false,
                        mensaje: "Recuerda que en el nombre solo puedes escribir letras  y que la longitud debe ser menor a 60 caracteres"
                    })
                } else if (com.length > 400) {
                    res.json({
                        ok: false,
                        mensaje: "Máximo 455 caracteres en el comentario"
                    })
                } else if (!validaciones.correo(Usuario.correo)) {
                    res.json({
                        ok: false,
                        mensaje: "En el correo la longitud debe ser menor a 40 caracteres y solo puedes escribir letras, números, arroba y punto"
                    })
                    
                } else if (!validaciones.escritura(Usuario.com)) {
                    res.json({
                        ok: false,
                        mensaje: "En el comentario solo se permiten los caracteres Aa-Zz Áá-Úú 0-9 . ¡ ? ¿ ! # $ % & ( ) = , ; : - _ "
                    })
                    
                }
                else if (!validaciones.tel(Usuario.tel)) {
                    res.json({
                        ok: false,
                        mensaje: "En el telefono la longitud debe ser de 10 números y deben de ser solo números"
                    })
                    
                }
                 else {
                    res.json({
                        ok: true,
                        mensaje: "Listo, pronto te contactaremos"
                    })
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

module.exports = app;