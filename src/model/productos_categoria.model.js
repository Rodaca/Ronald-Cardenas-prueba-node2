const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config.js");
const Categoria = require("./categoria.model.js");
const Producto = require("./producto.model.js");


// Definir el modelo ProductosCategoria
class ProductosCategoria extends Model {}

// Definir los atributos y configuraciones del modelo
ProductosCategoria = sequelize.define('ProductosCategoria', {
    id: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true
    },
    id_categoria:{
        type:DataTypes.SMALLINT,
        allowNull: false,
        references:{
            model:Categoria,
        }
    },
    id_producto:{
        type:DataTypes.SMALLINT,
        allowNull: false,
        references:{
            model:Producto,
        }
    }
}, {
    sequelize, // Pasar la instancia de Sequelize
    modelName: 'ProductosCategoria', // Nombre del modelo en singular
    tableName: 'categorias', // Nombre de la tabla en plural
    timestamps: false // Desactivar la creación automática de timestamps
});

module.exports = ProductosCategoria;