const c = require('./confDB.js');

//Conexión a la db
var pool = c.Connect;


const {
    cifrar,
    decifrar
} = require("../middlewares/cifrado.js");

const guardarContacto = (data) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(`insert into contacto(nom_com,tel_com,cor_com,com_com,fec_com)
                    values ('${data.nombre}','${data.tel}','${data.cor}','${data.fec}')`, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve("Publicación Guardada");
                    }
                });
            }
            connection.release();
        });

    });
}
