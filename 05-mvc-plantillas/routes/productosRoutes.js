const express = require('express');

//instanciamos un enrutador
const router = express.Router();
//get productos

//traemos la info
//const productos = require('../model/productos');

const productosContrller = require('../controllers/productosController');

const{
    postProducto,
    deleteProducto,
    putProducto
} = require('../controllers/productosController');

router.get("/listar", getProducto);

router.post("/guardar",  postProducto);

router.put("/modificar", putProducto);

router.delete("/borrar", deleteProducto);

module.exports = router;