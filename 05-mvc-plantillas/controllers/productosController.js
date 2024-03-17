const productos = require('../model/productos');

const getProducto =  (req,res) =>{
    res.json(productos);
}

const postProducto = (req,res) =>{
    res.json(productos);
}

const putProducto = (req,res) =>{
    res.json(productos);
}

const deleteProducto = (req,res) =>{
    res.json(productos);
}

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto,
}