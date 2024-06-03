//Gestión Rutas
const express = require('express');
const dayjs = require('dayjs');
const fs = require('node:fs/promises');

// Creación APP
const app = express();
app.use(express.json());

//Middlewares
app.use((req, res, next) => {
    const currentDate = dayjs().format('DD-MM-YYYY HH:mm.ss');
    console.log(currentDate);
    req.currentDate = currentDate;
    next();
})

app.use((req, res, next) => {
    // Comprobar si la petición tiene la cabecera de Authorization
    if (!req.headers['authorization']) {
        return res.status(401).send('No tienes acceso');
    }
    next();
});

app.use(async (req, res, next) => {
    // Registrar en un fichero las peticiones entrantes
    const currentDate = dayjs().format('DD-MM-YYYY HH:mm.ss');
    const data = `[${currentDate}] Método: ${req.method}. Url: ${req.url}\n`;

    await fs.appendFile('./main.log', data);

    next()
});

//Rutas
app.use('/api', require('./routes/api'));

module.exports = app;