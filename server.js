//Archivos de configuración
require("./config/config");
require("./helpers/helpers");

//Invocación de librerias
const hbs = require("hbs");
const express = require("express");
const session = require("express-session");
const body_parser = require('body-parser');

//Socket
//const socketIO = require("socket.io");
const http = require("http");
//
const app = express();

//Socket
let server = http.createServer(app);

app.use(body_parser.urlencoded({
    extended: true
}));

//Asignar las sessions
app.use(session({
    secret: "Hola niños",
    resave: true,
    saveUninitialized: true
}));

//Asignar el directorio estático(para imágenes,css, etc)
app.use(express.static(__dirname + "/public"));

//Asignar el motor de vistas
app.set("view engine", "hbs");

//Asignar la carpeta en la que se asignaran las vistas
hbs.registerPartials(__dirname + "/views/partials/");

//Asignar donde estan nuestras rutas
app.use(require("./rutes/index.js"));

/*socket
module.exports.io = socketIO(server);
require("./sockets/socket.js");
*/

server.listen(process.env.PORT, () => {
    console.log("Server port: ", process.env.PORT);
});
/*IMPORTANTE: ESTOS METODOS PARA MANEJAR ERRORES VAN AL FINAL DE TODO
//Error 404, page not found
app.use(function(req, res, next) {
    if (req.session.usuario == undefined) {
        res.status(404).render("error404logout", {
            TituloPagina: "Error 404"
        });
    } else if (req.session.usuario != undefined) {
        if (req.session.admin == 1) {
            res.status(404).render("error404login", {
                TituloPagina: "Error 404",
                Admin: "Si",
                script: "assets/js/app3.js"
            });
        } else {
            res.status(404).render("error404login", {
                TituloPagina: "Error 404"
            });
        }

    }
});
//error 500, algo esta mal con la app y se murio jsjsjsjs
app.use(function(err, req, res, next) {
    console.error(err.stack);
    if (req.session.usuario == undefined) {
        res.status(404).render("error500logout", {
            TituloPagina: "Error 500"
        });
    } else if (req.session.usuario != undefined) {
        if (req.session.admin == 1) {
            res.status(404).render("error500login", {
                TituloPagina: "Error 500",
                Admin: "Si",
                script: "assets/js/app3.js"
            });
        } else {
            res.status(404).render("error500login", {
                TituloPagina: "Error 500"
            });
        }

    }
});*/