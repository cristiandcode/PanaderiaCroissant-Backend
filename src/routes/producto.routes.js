import { Router } from "express";

const router = Router(); 

// app.get('/prueba', (req, res)=>{
//     console.log('Prueba de solicitud GET')
//     //Enviar respuesta
//     res.send('Desde mi backend de Panaderia Croissant')

// })

//crear las rutas
router.route('/prueba').get((req, res)=>{
    console.log('Prueba de solicitud GET')
    //Enviar respuesta
   res.send('Desde mi backend de Panaderia Croissant')
})

export default router;