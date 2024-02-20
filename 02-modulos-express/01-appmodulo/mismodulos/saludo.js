let selecciones = ['Argentina','Brasil','Venezuela','Paraguay']

//ES5
for (let i= 0; i< selecciones.length; i++){
    console.log(selecciones[i]);
}

console.log('\n=======================')
//ES6 es una actualizacion
for(let seleccion of selecciones){
    console.log(seleccion);
}

const saludo = () => console.log('Hola gente de la UTN');


//Exportar mis modulos
//module.exports = selecciones;

module.exports = {
  selecciones,
  saludo
}

