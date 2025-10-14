import Producto from "../database/models/producto.js"

export const listarProductos = (req, res)=>{
    console.log('Prueba de solicitud GET')
    //Enviar respuesta
   res.send('Desde mi backend de Panaderia Croissant')
}
export const crearProducto = async (req, res)=>{
    try{
    //Validar los datos del producto del body
    //Le pedimos a la BD crear el producto
    console.log(req.body)
    const productoNuevo = new Producto(req.body)
    await productoNuevo.save(); //Aqui se guarda en la bd
    //Enviar la respuesta al front  
        res.status(201).json({mensaje: 'Producto creado con exito', producto: productoNuevo})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al crear el producto'})
    }

}

