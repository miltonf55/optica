const c = require('./confDB.js');

//Conexión a la db
var pool = c.Connect;


const {
    cifrar,
    decifrar
} = require("../middlewares/cifrado.js");

const validarCorreo = (correo) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(`select * from usuario`, (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        var disponible = true;

                        for (usuario of res) {
                            if (decifrar(usuario.cor_usu) === correo) {

                                disponible = false;
                            }
                        }

                        resolve(disponible);
                    }
                });

            }
            connection.release();
        });
    });
}
