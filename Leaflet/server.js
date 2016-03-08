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

app.get('/lld3', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/zipcode', function(req, res){
  res.sendfile(__dirname + '/public/zipcode.html');
});

app.get('/zipcode.tsv', function(req, res){
  res.sendfile(__dirname + '/public/zipcode.tsv');
});

// escuchar
app.listen(9000, function (){
    console.log('Escuchando sobre el puerto 9000');
});