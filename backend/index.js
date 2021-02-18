//Importar librerias
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Usar los metodos de las librerias
const app = express();
require('dotenv').config();


//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


//Conexion a la DB 
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(()=> {console.log("Data Base Connected!") })

//Routes setup
/*app.get('/', (req, res) => {
    res.send("Hi from server! Soy severo pro");
})*/
app.use('/api/category', require('./routes/category'));
app.use('/api/videogame', require('./routes/videogame'));
//Listen Port
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor está siendo ejecutado en el puerto ${port}`);
})