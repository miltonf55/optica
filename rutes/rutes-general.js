const express = require("express");

const app = express();

app.get("/activaJS", (req, res) => {
    res.send("<div align='center'><br><br><font color='red'><h1 align='center'>Para poder usar ésta página activa JavaScript y regresa a la página anterior</div>");
});

app.get("/", (req, res) => {
    res.render("index", {
        TituloPagina: "Bienvenido"
    });
});

module.exports = app;