const express = require('express');
const dotenv = require('dotenv'); 

//iniciamos la configuración de las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT; //traigo la variable.

app.get('/',(req,res)=>{

    //imprimos las variables de entorno agregadas.
    console.log("======================");
    console.log(process.env.PORT);
    console.log(process.env.PASSWORD);
    console.log("======================");

    res.send("Hola mundo");
    //todo lo que escriba aca abajo no anda. no puedo poner otro send tampoco.

    //Respuestas que poodemos procesar con express
    //res.send()
    //res.redirect Redirecciona
    //res.end()
    //res.json()
    //res.status(). estado
    //res.render()
    //res.sendFile(), envia archivo
    //res.download, descarga datos
}

);

app.get('/send', (req,res) => {
    console.log("======================");
    console.log(req.url);
    console.log("======================");

    res.send(`

    <form>
    <p>
    Ingrese tu nombre completo  <input type="text" value="Nombre completo">
    <input type="submit" value="Enviar el formulario">
    <input type="reset" value="Eliminar datos">
    </p>
  </form>
  
  `);

});

app.get('/descargas', (req,res) => {
    console.log("======================");
    console.log(req.url);
    console.log("======================");

    res.download('./hola.txt');

});




app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor Corriendo en el puerto http://localhost:${PORT}`);

});