const selecciones = require('./mismodulos/saludo.js');

//importo el arreglo.
const {
    selecciones,
    saludo
} = require('./mismodulos/saludo.js');

//agregar datos al array selecciones

selecciones.push("Chile", "Perú");


console.log(selecciones);

saludo();

//importo la funcion saludo
//const selecciones = require('./mismodulos/saludo.js');

//const pepe = require('./mismodulos/saludo.js')
//pepe()


console.log("========================");
console.log("Imprimimos el modulo del archivo");
console.log("========================");
// Imprime el dato del modulo
console.log(module);

console.log("========================");
console.log("Imprimimos los procesos de node");
console.log("========================");

//imprime los procesos de node
console.log(process);
console.log(process.env);


