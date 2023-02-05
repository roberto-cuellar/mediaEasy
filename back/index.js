const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./api/monolito/storage/mongo/connection/db.config');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas 

// Autenticacion
app.use( '/auth', require('./api/monolito/routes/auth') );

// Posts
app.use( '/posts', require('./api/monolito/routes/posts') );

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
