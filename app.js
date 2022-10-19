var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var port = 3000;
app.listen(port, function(){
    console.log("WebServer ouvindo na porta " + port);    
});