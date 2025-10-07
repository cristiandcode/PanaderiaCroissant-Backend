import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// 1- Configurar un puerto
const app = express();
//crear una variable de entorno
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=> {
    console.log('Estoy escuchando el puerto '+ app.get('port'));
})
// 2- Configurar los middlewares
//Habilidades que tendrá mi backend
app.use(cors()) //Permitir conexiones remotas con CORS
app.use(morgan('dev')) //Datos extras en la terminal con morgan
app.use(express.json()); //Configurar para que  se interpreten los datos en formato JSON  y que pueda acceder a los datos del body del request
app.use(express.urlencoded({extended:true})); //y que pueda acceder a los datos del body del request
//Configurar archivos estaticos
//Que mi backend entienda JSON y que pueda acceder a los datos del body del request


// 3- Crear las rutas
//Empezaremos a crear las rutas y comenzamos con GET
//http://localhost:4001/prueba
app.get('/prueba', (req, res)=>{
    console.log('Prueba de solicitud GET')
    //Enviar respuesta
    res.send('Desde mi backend de Panaderia Croissant')

})




//Minuto 42 15 de mayo de 2024 - Veremos que es el framework Express y realizaremos algunas configuraciones basicas en el Backend - Crearemos un nuevo proyecto en MongoDB y lo configuraremos 👨‍💻👩‍💻