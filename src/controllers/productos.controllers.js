import Producto from "../database/models/producto.js"

export const listarProductos = (req, res)=>{
    console.log('Prueba de solicitud GET')
    //Enviar respuesta
   res.send('Desde mi backend de Panaderia Croissant')
}
export const crearProducto = (req, res)=>{
    //Validar los datos del producto del body
    //Le pedimos a la BD crear el producto
    //Enviar la respuesta al front
}

