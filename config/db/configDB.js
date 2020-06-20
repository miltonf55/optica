const mysql=require('mysql');

//Configuración de la conexión a la db hosteada
var confCon={
    connectionLimit:10,
	host:'localhost',
	user:'root',
	password:'n0m3l0',
	database:'optica'
};
var conP= mysql.createPool(confCon);
conP.on('acquire', function (connection) {
    console.log('Connection %d acquired', connection.threadId);
});
conP.on('connection', function (connection) {
    connection.query('SET SESSION auto_increment_increment=1')
});

module.exports.Connect=conP;