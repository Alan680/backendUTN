const express = require('express');

const app = express();
const PORT = 9000;

app.get('/', function(peticion, respuesta){
    console.log("==============");
    console.log(peticion);
    console.log(peticion.url);
    console.log(peticion.method);
    console.log(peticion.headers);
    console.log("==============");

    respuesta.send("Bienvenido al servidor con NODE");

});

app.get("/saludo", function(peticion,respuesta){
    respuesta.send("Hola mundo desde node");
});