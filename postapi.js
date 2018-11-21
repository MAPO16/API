const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "API"
});

connection.connect();


app.post('/rest/archivos', function(req, res) {

 
 
   var Nombre_del_Archivo  = req.body;
   var Fecha_que_se_creo = req.body;
   var Tamaño = req.body;
   var Id_Archivo = req.body;
   console.log(Nombre_del_Archivo,Fecha_que_se_creo,Tamaño,Id_Archivo);
   connection.query('INSERT INTO Archivos SET ?', Nombre_del_Archivo,Fecha_que_se_creo,Tamaño,Id_Archivo, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(2045, function () {
 console.log('Node app is running on port 2045');

});

