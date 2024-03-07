const router = require('express').Router();
const Producto = require('../model/producto.model');
const ProductosStock = require('../model/producto_stock.model');
const Tienda = require('../model/tienda.model');


Producto.belongsToMany(Tienda, { through: ProductosStock, foreignKey: 'id_producto' });
Tienda.belongsToMany(Producto, { through: ProductosStock, foreignKey: 'id_tienda' });


router.get('/productos',  async(req, res)=>{
    const productos = await Producto.findAll({
        include:{model:Tienda}
    })
    

    
    const productosDatos = productos.map(({id,nombre,presentacion,Tiendas}) => ({
        idProductos:id,
        nombre,
        presentacion,
        tiendas:Tiendas.map(({id,nombre,ProductosStock})=>({
            idTienda:id,
            nombre,
            stock:ProductosStock.cantidad
        }))
    }))

    res.status(200).json({
        status:200,
        body:productosDatos

    })
})


module.exports = router;