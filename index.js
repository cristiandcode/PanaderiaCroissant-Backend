import express from 'express';

// 1- Configurar un puerto
const app = express();
//crear una variable de entorno
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=> {
    console.log('Estoy escuchando el puerto '+ app.get('port'));
})
// 2- Configurar los middlewares

// 3- Crear las rutas

//Minuto 42 15 de mayo de 2024 - Veremos que es el framework Express y realizaremos algunas configuraciones basicas en el Backend - Crearemos un nuevo proyecto en MongoDB y lo configuraremos 👨‍💻👩‍💻