const express = require("express");

const app = express();

app.get("/activaJS", (req, res) => {
    res.send("<div align='center'><br><br><font color='red'><h1 align='center'>Para poder usar ésta página activa JavaScript y recarga</div>");
});

app.get("/", (req, res) => {
    res.render("index", {
        TituloPagina: "Bienvenido",
        Inicio: "Si"
    });
});
app.get("/contact", (req, res) => {
    res.render("contact", {
        TituloPagina: "Contactanos",
        Inner: "Si",
        Contact: "Si"
    });
});
app.get("/service", (req, res) => {
    res.render("service", {
        TituloPagina: "Servicios",
        Inner: "Si",
        Service: "Si"
    });
});
app.get("/about", (req, res) => {
    res.render("about", {
        TituloPagina: "Sobre Nosotros",
        Inner: "Si",
        About: "Si"
    });
});
module.exports = app;