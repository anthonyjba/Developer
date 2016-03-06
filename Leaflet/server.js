// importar
var express = require('express');
 
// instanciar
var app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/indexD3.html');
});
app.get('/style.css', function(req, res){
  res.sendfile(__dirname + '/public/style.css');
});
app.get('/json', function(req, res){
  // Indicamos el tipo de contenido a devolver en las cabeceras de nuestra respuesta
  res.contentType('application/json');
  res.sendfile(__dirname + '/es.json');
});

// escuchar
app.listen(9000);