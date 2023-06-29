const express = require('express'); //Se invoca express
const app = express();
const userRoutes = require('./routes/userRoutes')

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas (Endpoints)
app.use('/api/users', userRoutes); //importamos rutas de nuestro archivo


// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

app.listen(process.env.PORT, () => {
    console.log(`SERVER corriendo en http://localhost:${process.env.PORT}`);
});