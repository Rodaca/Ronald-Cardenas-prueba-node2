const { Model,DataTypes, DECIMAL } = require("sequelize")
const sequelize= require("../database/config.js")
const Tienda = require("./tienda.model.js")
const Producto =require('./producto.model.js')


class ProductosStock extends Model {}

ProductosStock = sequelize.define('ProductosStock', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidad:{
        type :DECIMAL(8,3),
        allowNull: false
    },
    id_tienda: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tienda,
            key: 'id'
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Producto,
            key: 'id'
        }
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: "ProductosStock",
    tableName: 'productos_stocks',
    timestamps: false
});

module.exports = ProductosStock;