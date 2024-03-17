const express = require('express');
const router = express.Router();
const clientes = require('../model/clientes'); 

router.get("/", (req, res) => {
    res.json(clientes);
});

router.post("/clientes", (req, res) => { 
    res.json(clientes);
});

router.put("/clientes", (req, res) => {
    res.json(clientes);
});

router.delete("/clientes", (req, res) => { 
    res.json(clientes);
});

module.exports = router;