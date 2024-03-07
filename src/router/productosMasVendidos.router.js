const router = require('express').Router();
const Pedido = require('../model/pedido.,model');
const PedidoProducto = require('../model/pedidos_producto.model');
const Producto = require('../model/producto.model');



Producto.belongsTo(PedidoProducto, {  foreignKey: 'id' });
PedidoProducto.belongsTo(Producto, {  foreignKey: 'id_producto' });

router.get('/productos/mas-vendidos',  async(req, res)=>{
    const productos = await PedidoProducto.findAll({
        include:{model: Producto },
        order:[["cantidad","DESC"]],
        limit:10
    })
    
    const productoMasVendidos = productos.map(({cantidad,Productos})=>({
        idProducto :Productos.id,
        nombre: Productos.nombre,
        presentacion: Productos.presentacion,
        unidadesVendidas:cantidad

    }))
    
    
    res.status(200).json({

        body:productoMasVendidos

    })
})


module.exports = router;