const express = require('express');
const dotenv =  require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('node:path');

dotenv.config(); 
 
const app = express();
const PORT = process.env.PORT || 8080;

//traemos las rutas d los routes
const productosRoutes = require('./routes/productosRoutes');
const clientesRoutes = require('./routes/clientesRoutes'); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/productos', productosRoutes);
app.use('/api/clientes', clientesRoutes);

app.get("/", (req,res) =>{
    res.send("Hello World");
})


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
})