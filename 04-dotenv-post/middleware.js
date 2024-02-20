//Middlewares: funciones que se ejecutan antes de que lleguen las rutas
// Forma 1:
//le agregamos el next en los argumento, puedo ponerlo en un archivo de middle

//le decimos que continue, si no no sale
const middleUno = (req, res, next) =>{ 
    console.log("===========================");
    console.log('Hola soy el Middleware UNO');
    console.log("===========================");
    
    next(); 
   
}

module.exports = middleUno;
// si tengo mas middle tengo que poner { y separado por comas}
// en el const le tengo que poner { }