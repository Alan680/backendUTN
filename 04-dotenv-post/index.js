const express = require('express');
const dotenv =  require('dotenv');
dotenv.config(); 
//no se instala, es nativo de node
const path = require('node:path'); //en caso de no encontrar la ruta al html o similar

//require('dotenv').config(); es lo mismo que las dos lineas de arriba
const app = express();
const PORT = process.env.PORT || 9000  //si no habria puerto definido usa el 9000

const middleUno = require('./middleware');


//Forma 2: Uso del Middle general, para todas las rutas. Para que no pase lo llamo en la ruta que quiero
//app.use(middleUno);
app.use(express.json()); //puede leer y responder archivos con Json, Viene default}

app.use(express.urlencoded({ extended: true }));//puede leer y responder con JSON
app.use(express.static('public')); //busca los archivos estaticos en public
//mando el html
app.use(express.static(path.join(__dirname, 'public'))); //el nomnbre del directorio del index
// path.join une 

console.log(__dirname + '/public'); //puesto solamente para saber que mandamos


//un middleware personalizado
app.get('/form',middleUno,(req,res)=> {
    res.send('Soy el form de la app');
})

app.get('/post',(req,res)=>{
    res.send('Soy el post de la app');
})

//Recibo de datos
app.post('/json', (req,res) => {
    console.log("===========================");
    console.log(req.body);  //body imprime todo
    console.log(req.body.nombre); //aca imprimo por partes
    console.log(req.body.stock);
    console.log(req.body.precio);
    console.log("===========================");

    //desestructuracion
    const {nombre, stock , precio} = req.body
//enviando en formato json
    res.json(
        {
       // nombre: req.body.nombre, dos formas de hacerlo
        nombre: nombre,
        
        
       // stock:  req.body.stock,
        stock: stock,
       // precio: req.body.precio
        precio:precio
        })
})

app.post('/urlencoded', (req,res) => {
    console.log("===========================");
    console.log(req.body);  //body imprime todo
    console.log(req.body.nombre); //aca imprimo por partes
    console.log(req.body.edad);
    console.log(req.body.dni);
    console.log("===========================");

    //desestructuracion
    const {nombre, edad , dni} = req.body
//enviando en formato json
    res.json(
        {
        nombre: nombre,
       
        edad: edad,
     
        dni:dni
        })
})

//enviar archivos HTML, la mandamos al home
app.get('/',(req,res)=>{
    res.status(200).sendfile('index.html'); 
})

app.get('/error',(req,res)=>{
    res.status(302).redirect('redirect.html'); 
})


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
})